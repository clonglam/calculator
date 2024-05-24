import "@testing-library/jest-dom/vitest"
import { afterEach, beforeEach, vi } from "vitest"

vi.mock("zustand")

beforeEach(() => {
  const ResizeObserverMock = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))

  vi.stubGlobal("ResizeObserver", ResizeObserverMock)

  window.btoa = (str: string) => Buffer.from(str, "binary").toString("base64")
  window.atob = (str: string) => Buffer.from(str, "base64").toString("binary")
})
afterEach(() => {})