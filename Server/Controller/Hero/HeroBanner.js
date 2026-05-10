const { HeroImage } = require("../../Modle/HeroBanner/HeroBanner");
const path = require('path')
const fs = require('fs')
const cloudinary  = require('../../Config/cloudinary')
const HeroBanner = async (req, res) => {
    try {
        const responce = await HeroImage.find()
        res.send({
            status: 1,
            message: "Hero Banner Image Get Successfully",
            data: responce,
        })
    }
    catch (error) {
        res.send({
            status: 0,
            message: "Hero Banner Image Get Failed",
            error: error.message,
        })
    }
}
const GetHeroBanner = async (req, res) => {
    try {
        const responce = await HeroImage.find({isActive:true})
        res.send({
            status: 1,
            message: "Hero Banner Image Get Successfully",
            data: responce,
        })
    }
    catch (error) {
        res.send({
            status: 0,
            message: "Hero Banner Image Get Failed",
            error: error.message,
        })
    }
}
const PostHeroBanner = (req, res) => {
    console.log(req.file,req.body)
    try {
        const data = new HeroImage({
            image: req.file.path,
            title:req.body.title,
            desc:req.body.desc,
            subtitle:req.body.subtitle
        })
        data.save()
        res.send({
            status: 1,
            message: "Hero Banner Image Upload Successfully",
            data
        })
    }
    catch (error) {
        res.send({
            status: 0,
            message: "Hero Banner Image Upload Failed",
            error: error.message,
        })
    }
}



const HeroBannerDelete = async (req, res) => {
  const { id } = req.params;

  try {

    // find banner
    const imageDelete = await HeroImage.findById(id);

    if (!imageDelete) {
      return res.send({
        status: 0,
        message: "Banner not found",
      });
    }

    // delete image from cloudinary
    if (imageDelete.public_id) {
      await cloudinary.uploader.destroy(imageDelete.public_id);
    }

    // delete from mongodb
    const data = await HeroImage.deleteOne({ _id: id });

    res.send({
      status: 1,
      message: "Hero Banner Image Delete Successfully",
      data,
    });

  } catch (error) {

    res.send({
      status: 0,
      message: "Hero Banner Image Delete Failed",
      error: error.message,
    });

  }
};



const HeroBannerUpdate = async (req, res) => {
  try {
    const { id, isActive, title, subtitle, desc } = req.body;

    const findBanner = await HeroImage.findById(id);

    if (!findBanner) {
      return res.send({
        status: 0,
        message: "Banner not found",
      });
    }

    const updateHeroObj = {};

    // IMAGE UPDATE
    if (req.file) {

      // old image delete from cloudinary
      if (findBanner.public_id) {
        await cloudinary.uploader.destroy(findBanner.public_id);
      }

      // new image upload
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "hero",
      });

      updateHeroObj.image = result.secure_url;
      updateHeroObj.public_id = result.public_id;
    }

    // OTHER FIELDS
    if (typeof isActive !== "undefined") {
      updateHeroObj.isActive = isActive;
    }

    if (title) updateHeroObj.title = title;
    if (subtitle) updateHeroObj.subtitle = subtitle;
    if (desc) updateHeroObj.desc = desc;

    const imageUpdate = await HeroImage.updateOne(
      { _id: id },
      {
        $set: updateHeroObj,
      }
    );

    res.send({
      status: 1,
      message: "Update banner successful",
      data: imageUpdate,
    });

  } catch (error) {
    console.log(error.message);

    res.send({
      status: 0,
      message: "Update banner failed",
      error: error.message,
    });
  }
};


module.exports = { PostHeroBanner, HeroBanner, HeroBannerDelete, HeroBannerUpdate,GetHeroBanner }