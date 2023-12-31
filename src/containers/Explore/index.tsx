/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box, Grid, Paper } from "@mui/material";
import styles from "./styles";
import Footer from "@Components/Footer";
import AppBar from "@Components/AppBar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetCategoryItemsMutation,
  useGetHomePageMutation,
  useGetSearchResultsMutation,
} from "@Containers/Home/apiSlice";
import { useEffect, useState } from "react";
import { isNonEmptyString } from "@Utils/checks";
import Loader from "@Components/Loader";

const imageData = [
  "https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg",
  "https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg",
  "https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg",
  "https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg",
  "https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg",
  "https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg",
  "https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg",
  "https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg",
  "https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg",
  "https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg",
  "https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg",
  "https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg",
  "https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg",
  "https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg",
  "https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg",
  "https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg",
  "https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg",
  "https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg",
  "https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg",
  "https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg",
  "https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg",
  "https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg",
  "https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg",
  "https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg",
  "https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg",
  "https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg",
  "https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg",
  "https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg",
  "https://i.pinimg.com/564x/76/eb/9f/76eb9ff45025b7b7e054f67d8a7fd947.jpg",
  "https://i.pinimg.com/564x/c8/26/d0/c826d05f91f2f1c682ca62504dc86be7.jpg",
  "https://i.pinimg.com/564x/88/5d/26/885d26e11277f28340f8511081dd4ffd.jpg",
  "https://i.pinimg.com/474x/eb/45/4a/eb454a065e558b7aeebc0c756d7dc4ee.jpg",
].map((d) => ({
  image_url: d,
  default_price: 1000,
  name: "Dummy Name",
  _id: { $oid: "123" },
}));

const FAQPage = () => {
  const { type, search } = useParams();

  const [products, setProducts] = useState(imageData);
  const [getProducts, { data: productsData, isLoading: isProductsLoading }] =
    useGetCategoryItemsMutation();
  const [getAllProducts, { data }] = useGetHomePageMutation();
  const [getSearchResults, { data: searchData, isLoading: isSearchLoading }] =  useGetSearchResultsMutation();

  useEffect(() => {
    if (type && isNonEmptyString(type)) {
      getProducts({ type });
    } else if (!search) {
      getAllProducts({});
    }
  }, [type, search]);

  // console.log('type ', type);
  // console.log('search ', search);

  useEffect(() => { 
    console.log('search ', search);
    if (search && isNonEmptyString(search)) {
      console.log('inside if ');
      getSearchResults({term: search})
    }
  }, [search]);

  useEffect(() => {
    if (data?.out?.length > 0) {
      setProducts(data?.out);
    }
  }, [data]);

  useEffect(() => {
    if (productsData?.out?.length > 0) {
      setProducts(productsData?.out);
    }
  }, [productsData]);
  useEffect(() => {
  if (searchData?.out?.length > 0) {
    setProducts(searchData?.out);
  }
}, [searchData]);

  const navigate = useNavigate();
  const handleOutfitOnClick = (id: string) => {
    navigate(`/outfit-details/${id}`, { state: { outfitId: id } });
  };
  if (isProductsLoading || isSearchLoading) return <Loader />;
  return (
    <Box sx={[styles.root]}>
      <AppBar />
      <div style={{ marginTop: "110px" }} />
      <Grid container={true} justifyContent="center" gap={4}>
        {products?.map((item) => {
          return (
            <Grid item={true} sx={styles.productCard}>
              <Box onClick={() => handleOutfitOnClick(item._id.$oid)}>
                <img src={item.image_url} alt="image" style={styles.image} />
              </Box>
              <Box
                sx={{
                  background: "white",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <span>
                    <CurrencyRupeeOutlinedIcon fontSize="small" />{" "}
                    <span style={{ fontSize: "14px", color: "#40798C" }}>
                      {item.default_price}
                    </span>
                  </span>
                  <span style={{ cursor: "pointer" }}>
                    <FavoriteBorderOutlinedIcon />
                  </span>
                </div>
                <div
                  style={{
                    padding: "5px 10px 10px 10px",
                    fontSize: "13px",
                    color: "gray",
                  }}
                >
                  {item.name}
                </div>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <div style={{ paddingBottom: "80px" }} />
      <Footer />
    </Box>
  );
};

export default FAQPage;
