import { create } from 'zustand';

// Mock user data
const mockUsers = [
  { id: '1', email: 'admin@cyberdefend.com', password: 'admin123', role: 'admin' },
  { id: '2', email: 'user@cyberdefend.com', password: 'user123', role: 'user' }
];

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  signIn: async (email, password) => {
    const user = mockUsers.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    set({ user });
  },
  signUp: async (email, password) => {
    const newUser = { id: String(mockUsers.length + 1), email, password, role: 'user' };
    mockUsers.push(newUser);
    set({ user: newUser });
  },
  signOut: () => {
    set({ user: null });
  },
}))

export default useAuthStore;