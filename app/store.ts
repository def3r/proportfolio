import { create } from 'zustand'

export interface SectionState {
  section: number,
  setSection: (newSection: number) => void
}
export const useSections = create<SectionState>((set) => ({
  section: 0,
  setSection: (newSection) => set({ section: newSection }),
}))
