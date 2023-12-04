import { expect } from 'chai';

export class TestHelpers {
    public static async expectThrowsAsync (method: () => Promise<unknown>, errorMessage?: string): Promise<void> {
        let error: Error | null = null;
        try {
            await method();
        }
        catch (err) {
            error = err as Error;
        }

        expect(error).to.be.an('Error');

        if (errorMessage && error !== null) {
            expect(error.message).to.contains(errorMessage);
        }
    }
}