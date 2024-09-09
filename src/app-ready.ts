export interface Wallet {
  readonly name: string
  readonly features: Record<string, any>
  readonly chains: `${string}:${string}`
  readonly icon: string
}

export interface WindowAppReadyEventAPI {
  register(wallet: Wallet): () => void
}

export class AppReadyEvent extends Event {
  readonly #detail: WindowAppReadyEventAPI

  get detail() {
    return this.#detail
  }

  get type() {
    return 'wallet-standard:app-ready' as const
  }

  constructor(api: WindowAppReadyEventAPI) {
    super('wallet-standard:app-ready', {
      bubbles: false,
      cancelable: false,
      composed: false
    })
    this.#detail = api
  }

  /** @deprecated */
  preventDefault(): never {
    throw new Error('preventDefault cannot be called')
  }

  /** @deprecated */
  stopImmediatePropagation(): never {
    throw new Error('stopImmediatePropagation cannot be called')
  }

  /** @deprecated */
  stopPropagation(): never {
    throw new Error('stopPropagation cannot be called')
  }
}
