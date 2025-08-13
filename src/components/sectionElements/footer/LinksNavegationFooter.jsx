import React, { useEffect, useState } from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function LinksNavegationFooter({ mode = "blog" }) {
  const [visibleLinks, setVisibleLinks] = useState([]);

  useEffect(() => {
    const allIds = content.texts.navbar.menuId || [];
    const allLabels = content.texts.navbar.menuItems || [];

    const paired = allIds.map((id, index) => ({
      id,
      label: allLabels[index] || id,
    }));

    if (mode === "site") {
      // No modo site → sempre mostra todos os links
      setVisibleLinks(paired);
    } else {
      // No modo blog → só mostra seções que existem no DOM
      const filtered = paired.filter(({ id }) => !!document.getElementById(id));
      setVisibleLinks(filtered);
    }
  }, [mode]);

  // Divide os links em duas colunas
  const half = Math.ceil(visibleLinks.length / 2);
  const firstHalf = visibleLinks.slice(0, half);
  const secondHalf = visibleLinks.slice(half);

  // Função para renderizar o link correto conforme mode
  const renderLink = (id, label) => {
    if (mode === "blog") {
      return (
        <ScrollLink
          to={id}
          className="cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
        >
          <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
            {label}
          </span>
        </ScrollLink>
      );
    } else {
      const to = id === "inicio" ? "/" : `/${id.toLowerCase()}`;
      return (
        <RouterLink to={to} className="cursor-pointer">
          <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
            {label}
          </span>
        </RouterLink>
      );
    }
  };

  return (
    <MotionDivDownToUp>
      <div className="flex justify-between full opacity-90">
        <div className="w-[46%] flex flex-col gap-y-[16px]">
          {firstHalf.map(({ id, label }) => (
            <div key={id} className="h-[36px] hover:underline">
              {renderLink(id, label)}
            </div>
          ))}
        </div>

        <div className="w-[46%] flex flex-col gap-y-[16px]">
          {secondHalf.map(({ id, label }) => (
            <div key={id} className="h-[36px] hover:underline">
              {renderLink(id, label)}
            </div>
          ))}
        </div>
      </div>
    </MotionDivDownToUp>
  );
}

export default LinksNavegationFooter;
