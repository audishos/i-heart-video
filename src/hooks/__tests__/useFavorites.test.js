import { renderHook, act } from '@testing-library/react-hooks';
import useFavorites from '../useFavorites';

describe('useFavorites', () => {
    let hookResult;
    beforeEach(() => {
        hookResult = renderHook(() => useFavorites()).result;
        const [, handleToggleFavorites] = hookResult.current;
        act(() => {
            handleToggleFavorites(1, false);
            handleToggleFavorites(2, false);
        });
    });

    it('should add to favorites', () => {
        act(() => {
            const [, handleToggleFavorites] = hookResult.current;
            handleToggleFavorites(3, false);
        });

        const [favorites] = hookResult.current;
        expect(favorites.includes(3)).toBe(true);
    });

    it('should remove from favorites', () => {
        act(() => {
            const [, handleToggleFavorites] = hookResult.current;
            handleToggleFavorites(1, true);
        });

        const [favorites] = hookResult.current;
        expect(favorites.includes(1)).toBe(false);
    });
});
