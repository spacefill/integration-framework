import { LOG_LEVEL_INFO } from "../utils/Console.mts"

export class Config {
    public static spacefill_api = {
        url: process.env?.SPACEFILL_API_URL ?? 'http://localhost:5004',
        api_token: process.env?.SPACEFILL_API_TOKEN ?? '',
    }
    public static console = {
        color: process.env?.CONSOLE_COLOR_ENABLED == '1' ? true : false,
        interactiveMode: process.env?.CONSOLE_INTERACTIVE_MODE == '1' ? true : false,
    }

    public static log = {
        level: process.env?.LOG_LEVEL ?? LOG_LEVEL_INFO,
        defaultLogLevel: LOG_LEVEL_INFO
    }

}