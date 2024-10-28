"use client";

import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const ClientLayout = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return <div>{children}</div>;
};

export default ClientLayout;
