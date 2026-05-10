import axios from "axios";
import { toast } from "react-toastify";

const baseurl = import.meta.env.VITE_BASEURL;
const localurl = import.meta.env.VITE_LOCALURL;

// ==============================
// TOPBAR API START
// ==============================

export const TopbarPost = async ({ title }) => {
  try {
    const url = `${localurl}/api/post/topbar`;

    await axios.post(url, { title });

    toast.success("Topbar data submitted successfully");
  } catch (error) {
    toast.error("Topbar submit failed");

    console.log(error);
  }
};

export const TopbarGet = async () => {
  try {
    const url = `${localurl}/api/topbar`;

    const response = await axios.get(url);

    return response.data.data;
  } catch (error) {
    toast.error("Failed to fetch topbar data");

    console.log(error);
  }
};

export const TopbarUpdate = async (id, text) => {
  try {
    const url = `${localurl}/api/update/topbar`;

    await axios.put(url, {
      _id: id,
      title: text,
    });

    toast.success("Topbar updated successfully");
  } catch (error) {
    toast.error("Topbar update failed");

    console.log(error);
  }
};

export const TopbarIsActive = async (id, isActive) => {
  try {
    const url = `${localurl}/api/update/topbar`;

    await axios.put(url, {
      _id: id,
      isActive,
    });

    toast.success(
      `Topbar ${isActive ? "Activated" : "Deactivated"}`
    );
  } catch (error) {
    toast.error("Topbar status update failed");

    console.log(error);
  }
};

export const TopbarDelete = async (id) => {
  try {
    const url = `${localurl}/api/delete/topbar/${id}`;

    await axios.delete(url);

    toast.success("Topbar deleted successfully");
  } catch (error) {
    toast.error("Topbar delete failed");

    console.log(error);
  }
};

// ==============================
// USER API START
// ==============================

export const SinginUserData = async () => {
  try {
    const url = `${localurl}/api/singup`;

    const response = await axios.get(url);

    return response.data.data;
  } catch (error) {
    toast.error("Failed to fetch users");

    console.log(error);
  }
};

// ==============================
// HERO BANNER API START
// ==============================

export const PostHeroBanner = async (data) => {
  console.log('data',await data)
  try {
    const url = `${localurl}/api/post/banner`;

    await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    toast.success("Hero banner uploaded successfully");
  } catch (error) {
    toast.error("Hero banner upload failed");

    console.log(error);
  }
};

export const GetHeroBanner = async () => {
  try {
    const url = `${localurl}/api/banner`;

    const response = await axios.get(url);

    return response.data.data;
  } catch (error) {
    toast.error("Failed to fetch banner data");

    console.log(error);
  }
};

export const DeleteHeroImage = async (id) => {
  try {
    const url = `${localurl}/api/delete/banner/${id}`;

    await axios.delete(url);

    toast.success("Banner deleted successfully");
  } catch (error) {
    toast.error("Banner delete failed");

    console.log(error);
  }
};

export const UpdateHeroImage = async (data) => {
  try {
    const url = `${localurl}/api/update/banner`;

    await axios.put(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    toast.success("Banner updated successfully");
  } catch (error) {
    toast.error("Banner update failed");

    console.log(error);
  }
};

// ==============================
// CATEGORY API START
// ==============================

export const GetCategory = async () => {
  try {
    const response = await axios.get(
      `${localurl}/api/category`
    );

    return response.data.data;
  } catch (error) {
    toast.error("Failed to fetch category data");

    console.log(error);
  }
};

export const PostCategory = async (data) => {
  try {
    await axios.post(
      `${localurl}/api/post/category`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success("Category added successfully");
  } catch (error) {
    toast.error("Category add failed");

    console.log(error);
  }
};

export const DeleteCategory = async (id) => {
  try {
    const url = `${localurl}/api/delete/category/${id}`;

    await axios.delete(url);

    toast.success("Category deleted successfully");
  } catch (error) {
    toast.error("Category delete failed");

    console.log(error.message);
  }
};

export const UpdateCategory = async (id, data) => {
  try {
    await axios.put(
      `${localurl}/api/update/category/${id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success("Category updated successfully");
  } catch (error) {
    toast.error("Category update failed");

    console.log(error);
  }
};

// ==============================
// PRODUCT TYPE API START
// ==============================

export const GetProductType = async () => {
  try {
    const response = await axios.get(
      `${localurl}/api/product-type`
    );

    return response.data.data;
  } catch (error) {
    toast.error("Failed to fetch product type");

    console.log(error);
  }
};

export const PostProductType = async (data) => {
  try {
    await axios.post(
      `${localurl}/api/post/product-type`,
      {
        name: data,
      }
    );

    toast.success("Product type added successfully");
  } catch (error) {
    toast.error("Product type add failed");

    console.log(error);
  }
};

export const DeleteProductType = async (id) => {
  try {
    const url = `${localurl}/api/delete/product-type/${id}`;

    await axios.delete(url);

    toast.success("Product type deleted successfully");
  } catch (error) {
    toast.error("Product type delete failed");

    console.log(error);
  }
};

export const UpdateProductType = async (id, data) => {
  try {
    const url = `${localurl}/api/update/product-type`;

    await axios.put(url, {
      id: id,
      name: data.name,
      isActive: data.isActive,
    });

    toast.success("Product type updated successfully");
  } catch (error) {
    toast.error("Product type update failed");

    console.log(error);
  }
};

// ==============================
// PRODUCT API START
// ==============================

export const GetProduct = async () => {
  try {
    const response = await axios.get(
      `${localurl}/api/product`
    );

    return response.data.data;
  } catch (error) {
    toast.error("Failed to fetch products");

    console.log(error);
  }
};

export const PostProduct = async (data) => {
  try {
    const url = `${localurl}/api/post/product`;

    await axios.post(url, data);

    toast.success("Product added successfully");
  } catch (error) {
    toast.error("Product add failed");

    console.log(error);
  }
};