import React, { useState } from 'react';
import {
  DndContext,
    closestCenter,
    KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';

// Import the 5 unique card components
import { CardOne } from './CardOne';
import { CardTwo } from './CardTwo';
import { CardThree } from './CardThree';
import { CardFour } from './CardFour';
import { CardFive } from './CardFive';

// Registry mapping string IDs to their separate unique components
const CARD_REGISTRY: Record<string, React.FC<{ id: string }>> = {
  'card-1': CardOne,
  'card-2': CardTwo,
  'card-3': CardThree,
  'card-4': CardFour,
  'card-5': CardFive,
};

export const DashboardBody: React.FC = () => {
  // Track arrangement layout order
  const [cardOrder, setCardOrder] = useState<string[]>([
    'card-1',
    'card-2',
    'card-3',
    'card-4',
    'card-5',
  ]);

  // Handle pointer and keyboard event sensor binding definitions
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // Prevents unintended drag events during subtle clicks
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setCardOrder((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);
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
      <SortableContext items={cardOrder} strategy={rectSortingStrategy}>
        {/* Content Body Container with flex wrap rendering alignment */}
        <div className="flex flex-wrap gap-6 p-8 justify-center max-w-[1400px] mx-auto">
          {cardOrder.map((id) => {
            const TargetCardComponent = CARD_REGISTRY[id];
            return <TargetCardComponent key={id} id={id} />;
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
};