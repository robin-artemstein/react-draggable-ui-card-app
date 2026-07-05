import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy
} from '@dnd-kit/sortable';
import type { CardItem } from '../types';
import SortableCard from './SortableCard';

// Shared static text block requirement
const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies, nunc ut euismod malesuada, libero arcu dapibus nulla, eget commodo purus felis eu odio. In non finibus leo, vel malesuada ligula. Etiam eget suscipit ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ac urna vitae quam scelerisque pretium ut vitae elit. Etiam sed vulputate lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In euismod aliquet sem non blandit. Pellentesque accumsan ante ac orci porttitor, nec consequat enim convallis. Vivamus ac posuere nulla. Etiam et ultrices tortor. Sed et congue eros. Duis ante ex, lacinia non risus ut, consectetur ullamcorper lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc eget rhoncus est, mattis eleifend dolor.";

// Generate 15 unique UI card structures initial values
const initialCards: CardItem[] = Array.from({ length: 15 }, (_, index) => ({
  id: `card-${index + 1}`,
  title: `Analytics Card ${index + 1}`,
  content: LOREM_IPSUM,
}));

export default function DashboardBody() {
  const [cards, setCards] = useState<CardItem[]>(initialCards);

  // Configure sensors for drag activation detection
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Drag termination evaluation logic
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setCards((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      {/* Aligned via flex wrap layout option configuration container */}
      <div className="flex flex-wrap gap-4 justify-start w-full">
        <SortableContext items={cards.map(c => c.id)} strategy={rectSortingStrategy}>
          {cards.map((card) => (
            <SortableCard key={card.id} card={card} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}