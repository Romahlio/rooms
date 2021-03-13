import { useState, useEffect } from "react";
import Room from './Room';
import './RoomContainer.css';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const RoomContainer = () => {
  const { x, y } = useMousePosition();

  const c = {
    x: window.outerWidth / 2,
    y: window.outerHeight / 2,
  };

  const rot = {
    x: (c.y - y) / (c.y / 4),
    y: (c.x - x) / (c.x / 8),
  };

  const myStyle = {
    transform: `rotateX(${rot.x}deg) rotateY(${-rot.y}deg)`,
  };

  return (
    <div className="container">
      <div className="scroller" style={myStyle}>
        <Room />
      </div>
    </div>
  );
}

export default RoomContainer;
