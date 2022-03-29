import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {LogService} from "../log.service";
import { firstValueFrom } from 'rxjs';

interface ErrorResponse {
    statusCode: number,
    message: string,
    error: string
}

interface Response {
    url: string,
    ok: boolean,
    status: number,
    statusText: string,
    message: string,
    body: any,
    error?: ErrorResponse
}

@Injectable({
    providedIn: 'root'
})
export class DataService {
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxQG1haWwuY29tIiwic3ViIjoxLCJzaWduYXR1cmUiOiJhY2Nlc3NfdG9rZW46MTY0ODU2MzYxNzAzNyIsImlhdCI6MTY0ODU2MzYxNywiZXhwIjoxNjQ4NTY3MjE3fQ.kN8yAU2g0oSRURzPF2fSAEX0kL82mfuE_60xW6PUg_Y';

    constructor(
        private readonly http: HttpClient,
        private readonly logger: LogService
    ) {}

    public async getUser(id: any): Promise<Response> {
        const url = `http://localhost:3000/api/profile/${id}`;
        this.logger.log(`Call ${url}`);

        const request = this.http.get<Response>(url, {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });

        const response = await firstValueFrom(request).catch((response: Response) => {
            if (!response.error) {
                response.error = {
                    statusCode: response.status,
                    message: response.message ?? response.statusText,
                    error: response.statusText
                }
            }
            response.message = response.error.message;
            return response;
        });

        if (response.status === undefined && response.ok === undefined) {
            return {
                url: url,
                ok: true,
                status: 200,
                statusText: 'OK',
                message: 'OK',
                body: response,
            };
        }

        return response;
    }
}