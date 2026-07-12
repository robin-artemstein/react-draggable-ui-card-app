import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { CardItem } from '../types';

interface SortableCardProps {
  card: CardItem;
}

export default function SortableCard({ card }: SortableCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  // Apply dynamic transform tracking styles to parent node elements
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 'auto',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex-1 min-w-[320px] max-w-[calc(33.333%-16px)] base-card-transition flex flex-col p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-200 ${
        isDragging ? 'opacity-40 border-indigo-500 ring-2 ring-indigo-500/20' : ''
      }`}
    >
      {/* Top Left Area arranged inside a 2-column grid system */}
      <div {...attributes} {...listeners} title="Drag title element to reorder card" className="grid grid-cols-[auto_1fr] gap-3 items-start mb-4">
        
        {/* Column 1: Dollar Sign SVG configured exclusively as the Drag Trigger Handle */}
        <div
          className="cursor-grab active:cursor-grabbing p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="var(--icon-colour)"
            viewBox="0 0 25 25" 
            className="w-6 h-6"
          >
            <path d="M12 2c0 0-3 0-4 3-1-3-4-3-4-3-2.2 0-4 1.8-4 4 0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4z"></path>
          </svg>
        </div>

        {/* Column 2: Title Block Text */}
        <h3 className="cursor-grab active:cursor-grabbing  text-lg font-semibold text-slate-800 dark:text-slate-100 pt-1.5 truncate">
          {card.title}
        </h3>
      </div>

      {/* Description Context Row below */}
      <div className="flex-1 overflow-y-auto max-h-[160px] text-sm text-slate-500 dark:text-slate-400 leading-relaxed pr-1">
        {card.content}
      </div>
    </div>
  );
}