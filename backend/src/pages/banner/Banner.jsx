import { useEffect, useState, useRef } from "react";
import {
  DeleteHeroImage,
  GetHeroBanner,
  PostHeroBanner,
  UpdateHeroImage,
} from "../../api/api";

// shadcn/ui
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Eye, EyeOff, Pencil, Trash2, ImagePlus } from "lucide-react";

export default function Banner() {
  const [HeroUplodeImage, setHeroUplodeImage] = useState(null);
  const [AllHeroImage, setAllHeroImage] = useState([]);
  const [isReloade, setIsReloade] = useState(false);

  const [prev, setPrev] = useState(null);
  const [updateId, setUpdateId] = useState(null);

  // extra fields
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [desc, setDesc] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    const GetHeroBannerData = async () => {
      const responce = await GetHeroBanner();
      setAllHeroImage(responce);
    };

    GetHeroBannerData();
  }, [isReloade]);

  // delete
  const DeleteBannerData = async (id) => {
    const Isconfirm = confirm("Are You Sure Delete Row?");
    if (Isconfirm) {
      await DeleteHeroImage(id);
      setIsReloade(!isReloade);
    }
  };

  // edit
  const handleEdit = (id) => {
    const SinglePrev = AllHeroImage.find((item) => item._id === id);

    setPrev(SinglePrev.image);
    setUpdateId(id);

    setTitle(SinglePrev.title || "");
    setSubtitle(SinglePrev.subtitle || "");
    setDesc(SinglePrev.desc || "");
  };

  // upload/update
  async function PostHeroImageUplode(e) {
    e.preventDefault();

    const formData = new FormData();

    if (HeroUplodeImage) {
      formData.append("image", HeroUplodeImage);
    }

    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("desc", desc);

    if (updateId) {
      formData.append("id", updateId);
      await UpdateHeroImage(formData);
    } else {
      console.log('aaa')
      await PostHeroBanner(formData);
    }

    // reset
    setHeroUplodeImage(null);
    setPrev(null);

    setTitle("");
    setSubtitle("");
    setDesc("");

    setUpdateId(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setIsReloade(!isReloade);
  }

  // image preview
  const handelData = (e) => {
    const value = e.target.files[0];

    setHeroUplodeImage(value);

    if (value) {
      const previewURL = URL.createObjectURL(value);
      setPrev(previewURL);
    }
  };

  // active/inactive
  const handleIsActive = async (id, isActive) => {
    const activeVal = new FormData();

    activeVal.append("id", id);
    activeVal.append("isActive", !isActive);

    await UpdateHeroImage(activeVal);

    setIsReloade(!isReloade);
  };

  return (
  <div className="min-h-screen  text-black md:p-10">
    
    {/* Upload Card */}
    <Card className="bg-white border border-[#9C21FA]/20 rounded-3xl shadow-2xl">
      <CardContent className="p-8">
        
        <div className="flex items-center gap-3 mb-8">
          <ImagePlus className="text-[#9C21FA]" />

          <h2 className="text-3xl font-bold text-black">
            Hero Banner Upload
          </h2>
        </div>

        <form
          onSubmit={PostHeroImageUplode}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          
          {/* title */}
          <div className="space-y-2">
            <Label className="text-gray-700">Title</Label>

            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter banner title"
              className="bg-white border-[#9C21FA]/30 text-black focus-visible:ring-[#9C21FA]"
            />
          </div>

          {/* subtitle */}
          <div className="space-y-2">
            <Label className="text-gray-700">Subtitle</Label>

            <Input
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Enter subtitle"
              className="bg-white border-[#9C21FA]/30 text-black focus-visible:ring-[#9C21FA]"
            />
          </div>

          {/* desc */}
          <div className="space-y-2 md:col-span-2">
            <Label className="text-gray-700">Description</Label>

            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter description..."
              rows={4}
              className="w-full rounded-md border border-[#9C21FA]/30 bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-[#9C21FA]"
            />
          </div>

          {/* file */}
          <div className="space-y-2 md:col-span-2">
            <Label className="text-gray-700">Banner Image</Label>

            <Input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handelData}
              className="bg-white border-[#9C21FA]/30 text-black"
            />
          </div>

          {/* preview popup */}
          {prev && (
            <div className="md:col-span-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    className="bg-[#9C21FA] hover:bg-[#7d18c9] text-white"
                  >
                    Show Preview
                  </Button>
                </DialogTrigger>

                <DialogContent className="bg-white border border-[#9C21FA]/30 text-black max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-[#9C21FA]">
                      Banner Preview
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-5">
                    <img
                      src={prev}
                      alt="Preview"
                      className="w-full h-[350px] object-cover rounded-xl border border-[#9C21FA]/20"
                    />

                    <div>
                      <h2 className="text-2xl font-bold text-black">
                        {title}
                      </h2>

                      <h4 className="text-[#9C21FA] mt-1">
                        {subtitle}
                      </h4>

                      <p className="text-gray-600 mt-3">
                        {desc}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          )}

          {/* button */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              className="bg-[#9C21FA] hover:bg-[#7d18c9] text-white w-full py-6 text-lg"
            >
              {updateId ? "Update Banner" : "Upload Banner"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>

    {/* Table */}
    <Card className="mt-10 bg-white border border-[#9C21FA]/20 rounded-3xl shadow-2xl">
      <CardContent className="p-6">
        
        <h2 className="text-2xl font-bold mb-6 text-black">
          Banner Data
        </h2>

        <div className="rounded-xl overflow-hidden border border-[#9C21FA]/20">
          
          <Table>
            <TableHeader className="bg-[#9C21FA]">
              <TableRow>
                <TableHead className="text-white">#</TableHead>
                <TableHead className="text-white">Image</TableHead>
                <TableHead className="text-white">Title</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Active</TableHead>
                <TableHead className="text-white text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {AllHeroImage.length > 0 ? (
                AllHeroImage.map((item, index) => (
                  <TableRow
                    key={index}
                    className="border-b border-[#9C21FA]/10 hover:bg-[#f7efff]"
                  >
                    <TableCell>{index + 1}</TableCell>

                    <TableCell>

  <Dialog>
    
    <DialogTrigger asChild>
      <img
        src={item.image}
        alt="banner"
        className="w-28 h-16 object-cover rounded-lg border border-[#9C21FA]/20 cursor-pointer hover:scale-105 transition"
      />
    </DialogTrigger>

    <DialogContent className="bg-white border border-[#9C21FA]/30 text-black max-w-4xl">
      
      <DialogHeader>
        <DialogTitle className="text-[#9C21FA]">
          Banner Preview
        </DialogTitle>
      </DialogHeader>

      <div className="space-y-5">
        
        <img
          src={item.image}
          alt="preview"
          className="w-full h-[400px] object-cover rounded-xl"
        />

        <div>
          <h2 className="text-2xl font-bold">
            {item.title}
          </h2>

          <h4 className="text-[#9C21FA] mt-2">
            {item.subtitle}
          </h4>

          <p className="text-gray-600 mt-3">
            {item.desc}
          </p>
        </div>

      </div>

    </DialogContent>

  </Dialog>

</TableCell>

                    <TableCell className="font-medium text-black">
                      {item.title}
                    </TableCell>

                    <TableCell>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.isActive
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        {item.isActive ? "Active" : "Inactive"}
                      </span>
                    </TableCell>

                    <TableCell>
                      <button
                        onClick={() =>
                          handleIsActive(item._id, item.isActive)
                        }
                      >
                        {item.isActive ? (
                          <Eye className="text-green-500 hover:text-green-700" />
                        ) : (
                          <EyeOff className="text-red-500 hover:text-red-700" />
                        )}
                      </button>
                    </TableCell>

                    <TableCell className="text-right space-x-2">
                      
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(item._id)}
                        className="border-[#9C21FA] text-[#9C21FA] hover:bg-[#9C21FA] hover:text-white"
                      >
                        <Pencil size={16} />
                      </Button>

                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => DeleteBannerData(item._id)}
                      >
                        <Trash2 size={16} />
                      </Button>

                    
                      
                    </TableCell>

                    
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-10 text-gray-500"
                  >
                    No Banner Found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

        </div>
      </CardContent>
    </Card>
  </div>
);
}