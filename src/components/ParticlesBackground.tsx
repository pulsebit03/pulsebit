"use client";

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await engine.load("tsparticles");
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log('Particles container loaded', container);
    }
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          color: {
            value: ["#3B82F6", "#8B5CF6", "#EC4899"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#8B5CF6",
            opacity: 0.2,
            width: 1
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1
              }
            },
            push: {
              quantity: 4
            }
          }
        },
        retina_detect: true,
        background: {
          color: "transparent"
        }
      }}
      className="absolute inset-0 z-0"
    />
  );
}