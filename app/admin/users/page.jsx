"use client";

import { Card, Row, Col } from "antd";
import React, { useEffect, useState } from "react";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers();
      setData(users);
    };

    getUsers();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #3b82f6, #6366f1)",
      }}
    >
      <div
        style={{
          padding: "40px",
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "24px",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <Row gutter={[16, 16]} justify="center">
          {data.map((user) => (
            <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ width: 300, borderRadius: "12px" }}
                bodyStyle={{ padding: "20px" }}
              >
                <Card.Meta
                  title={user.name}
                  description={
                    <>
                      <p>
                        <strong>Email:</strong> {user.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {user.phone}
                      </p>
                      <p>
                        <strong>Website:</strong> {user.website}
                      </p>
                      <p>
                        <strong>Company:</strong> {user.company.name}
                      </p>
                    </>
                  }
                  style={{ textAlign: "center" }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Page;
