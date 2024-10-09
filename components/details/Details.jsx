"use client";
import { useEffect, useState } from "react";
import { fetchDetailProducts } from "@/utils";
import { useParams } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import { Button, Card, Spin } from "antd";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = await fetchDetailProducts(id);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product details", err);
      } finally {
        setLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto relative bg-gradient-to-b from-gray-50 to-blue-200 ">
      <Link href="/" passHref>
        <Button
          type="primary"
          icon={<BiArrowBack size={20} />}
          className="bg-indigo-700 flex items-center text-white rounded-md shadow transition-transform duration-200 transform hover:scale-105 mb-4"
        >
          Back
        </Button>
      </Link>
      {product ? (
        <div className="flex justify-center">
          <Card
            hoverable
            title={product.title}
            style={{
              width: "400px",
              height: "600px",
              borderRadius: "16px",
              border: "1px solid #d9d9d9",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            cover={
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                  borderRadius: "16px 16px 0 0",
                }}
              />
            }
          >
            <p className="text-lg text-gray-600">
              Price:{" "}
              <span className="font-bold text-indigo-600 text-xl">{` $${product.price}`}</span>
            </p>
            <p className="text-gray-700 my-4">{product.description}</p>
          </Card>
        </div>
      ) : (
        <p className="text-center text-lg text-red-600">Product not found</p>
      )}
    </div>
  );
};

export default Details;
