import React from "react";

export const isLogin = async (userDto) => {
  return fetch("http://localhost:8085/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": " *",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(userDto),
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => {
      console.log("Hata Oluştu!");
      console.warn(error);
    });
};
