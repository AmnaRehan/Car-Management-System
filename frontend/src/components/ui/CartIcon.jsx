// src/components/ui/CartIcon.jsx
import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaOpencart } from "react-icons/fa6";

const CartIcon = () => {
  return <Icon as={FaOpencart} boxSize={5} />;
};

export default CartIcon;
