import React from "react";
import "./Background.css";

/**
 * Background
 * -----------------------------------------------------------------------
 * Premium, dark, futuristic animated backdrop for a portfolio / SaaS
 * landing page — in the visual family of Linear, Vercel, Raycast, Framer.
 *
 * Everything here is driven by CSS transforms / opacity / background-position,
 * so the compositor can run it entirely on the GPU. There is no per-frame
 * JavaScript, no scroll listeners, and no mouse tracking — which keeps the
 * scene locked at 60fps and battery-friendly on laptops and phones alike.
 *
 * Layer stack (back to front):
 *   1. Aurora        — huge, slow, blurred color fields
 *   2. Perspective    — infinite 3D grid, fading into the horizon
 *      Grid
 *   3. Ambient Light  — a slow rotating light sweep + soft vignette
 *   4. Glow Orbs      — 4 soft, independently drifting light sources
 * -----------------------------------------------------------------------
 */
export default function Background() {
  return (
    <div className="bg-root" aria-hidden="true">
      {/* ---------------------------------------------------------------
          LAYER 1 — AURORA
          Large, heavily blurred radial gradients that slowly drift and
          breathe. Pure background-position / transform animation.
      --------------------------------------------------------------- */}
      <div className="bg-aurora">
        <div className="bg-aurora__field bg-aurora__field--a" />
        <div className="bg-aurora__field bg-aurora__field--b" />
        <div className="bg-aurora__field bg-aurora__field--c" />
      </div>

      {/* ---------------------------------------------------------------
          LAYER 2 — 3D PERSPECTIVE GRID
          A ground-plane grid tilted ~78deg in 3D space, endlessly
          scrolling toward the viewer, softened by a fog / horizon fade.
      --------------------------------------------------------------- */}
      <div className="bg-grid-scene">
        <div className="bg-grid-scene__horizon-glow" />
        <div className="bg-grid-plane">
          <div className="bg-grid-plane__lines" />
        </div>
        <div className="bg-grid-scene__fog" />
      </div>

      {/* ---------------------------------------------------------------
          LAYER 3 — AMBIENT LIGHTING
          A very slow rotating light sweep plus a static vignette that
          adds depth without ever drawing attention to itself.
      --------------------------------------------------------------- */}
      <div className="bg-ambient">
        <div className="bg-ambient__beam" />
        <div className="bg-ambient__vignette" />
      </div>

      {/* ---------------------------------------------------------------
          LAYER 4 — FLOATING GLOW ORBS
          Only 4 orbs, pre-positioned in separate quadrants so they never
          cluster, each drifting on its own slow, independent loop.
      --------------------------------------------------------------- */}
      <div className="bg-orbs">
        <span className="bg-orb bg-orb--violet" />
        <span className="bg-orb bg-orb--cyan" />
        <span className="bg-orb bg-orb--magenta" />
        <span className="bg-orb bg-orb--blue" />
      </div>

      {/* Base film-grain-free dark backdrop sits beneath everything via CSS */}
    </div>
  );
}
