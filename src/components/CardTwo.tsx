import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface CardProps {
  id: string;
}

export const CardTwo: React.FC<CardProps> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 'auto',
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex-grow sm:flex-grow-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] min-w-[300px] p-6 bg-zinc-50 dark:bg-zinc-900 border-1 border-zinc-400 dark:border-zinc-600 rounded-xl shadow-lg shadow-zinc-300 dark:shadow-zinc-700 transition-colors duration-300"
    >
      <div
        {...attributes}
        {...listeners}
        className="grid grid-cols-[auto_1fr] gap-3 items-center cursor-grab active:cursor-grabbing mb-4 p-1 hover:bg-gray-50 dark:hover:bg-gray-750 rounded-lg transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="var(--icon-colour)" viewBox="0 0 25 25" className="w-6 h-6">
          <path d="M12 2c0 0-3 0-4 3-1-3-4-3-4-3-2.2 0-4 1.8-4 4 0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4z"></path>
        </svg>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white select-none">Operating Costs</h3>
      </div>
      <p className="text-lg text-black dark:text-white text-justify leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies, nunc ut euismod malesuada, libero arcu dapibus nulla, eget commodo purus felis eu odio. In non finibus leo, vel malesuada ligula. Etiam eget suscipit ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ac urna vitae quam scelerisque pretium ut vitae elit. Etiam sed vulputate lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In euismod aliquet sem non blandit. Pellentesque accumsan ante ac orci porttitor, nec consequat enim convallis. Vivamus ac posuere nulla. Etiam et ultrices tortor. Sed et congue eros. Duis ante ex, lacinia non risus ut, consectetur ullamcorper lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc eget rhoncus est, mattis eleifend dolor.
      </p>
    </div>
  );
};