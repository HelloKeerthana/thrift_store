import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkout from './Checkout';

jest.mock('jspdf', () => ({
  jsPDF: jest.fn(() => ({
    setFontSize: jest.fn(),
    setFont: jest.fn(),
    text: jest.fn(),
    save: jest.fn(),
  })),
}));

describe('Checkout', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ status: 'success', message: 'ok' }),
    });
    window.alert = jest.fn();
  });

  it('submits checkout data without a JSON preflight request', async () => {
    render(
      <Checkout
        cartItems={[{ name: 'Shirt', price: 599, quantity: 1 }]}
        userEmail="test@example.com"
        total={599}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: /checkout/i }));

    expect(global.fetch).toHaveBeenCalledTimes(1);
    const [url, options] = global.fetch.mock.calls[0];

    expect(url).toContain('/backend/save_order.php');
    expect(options.method).toBe('POST');
    expect(options.headers['Content-Type']).toBe('application/x-www-form-urlencoded;charset=UTF-8');
    expect(options.body).toContain('userEmail=test%40example.com');
    expect(options.body).toContain('total=599');
  });
});
