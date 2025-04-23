import { create } from 'zustand';

interface ReservationFilterState {
  hideCancelled: boolean;
  toggleCancelled: () => void;

  selectedDate: string;
  setSelectedDate: (date: string) => void;
  goToNextDay: () => void;
  goToPreviousDay: () => void;
}

export const useReservationFilterStore = create<ReservationFilterState>((set) => ({
  hideCancelled: true,
  toggleCancelled: () =>
    set((state: ReservationFilterState) => ({ hideCancelled: !state.hideCancelled })),

  selectedDate: '2024-07-14',
  setSelectedDate: (date: string) => set({ selectedDate: date }),

  goToNextDay: () =>
    set((state) => {
      const currentDate = new Date(state.selectedDate);
      const nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() + 1);
      return { selectedDate: nextDay.toISOString().split('T')[0] };
    }),

  goToPreviousDay: () =>
    set((state) => {
      const currentDate = new Date(state.selectedDate);
      const previousDay = new Date(currentDate);
      previousDay.setDate(currentDate.getDate() - 1);
      return { selectedDate: previousDay.toISOString().split('T')[0] };
    }),
}));
