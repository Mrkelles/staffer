
'use client'

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { DashboardNav } from './dashboard-nav';

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        <Menu />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div className="fixed inset-y-0 left-0 z-50 w-64 bg-[#F7ECE0] p-4" onClick={(e) => e.stopPropagation()}>
            <DashboardNav />
          </div>
        </div>
      )}
    </div>
  );
}
