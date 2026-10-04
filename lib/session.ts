export async function encrypt<T>(payload: T): Promise<string> {
    // Assuming seal returns a string or Promise<string>
    return await seal(JSON.stringify(payload), process.env.SESSION_SECRET!);
}

export async function decrypt<T>(cookie: string): Promise<T> {
    // Assuming unseal takes a string and returns a string or Promise<string>
    const unsealed = await unseal(cookie, process.env.SESSION_SECRET!);
    return JSON.parse(unsealed) as T;
}
