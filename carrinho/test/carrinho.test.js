import Carrinho from '../carrinho.js'
import Item from '../item.js'

describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho()
    expect(carrinho.subtotal).toBeNull()
  })

  it('Deve ter itens', () => {
    const item1 = new Item('Banana', 2, 5)
    const item2 = new Item('Maca', 0.5, 1)

    const carrinho = new Carrinho()

    carrinho.adiciona(item1)
    carrinho.adiciona(item2)

    expect(typeof carrinho).toBe('object')
    expect(carrinho.itens[0]).toBe(item1)
    expect(carrinho.itens[1]).toBe(item2)

    // Verificar se contem o item
    expect(carrinho.itens).toContain(item1)
    expect(carrinho.itens).toContain(item2)
  })

  it('Deve ter a propriedade "total" na inicialização', () => {
    const carrinho = new Carrinho()
    
    // Tem a propriedade
    expect(carrinho).toHaveProperty('total')
  })
})