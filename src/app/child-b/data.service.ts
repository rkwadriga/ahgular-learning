import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LogService} from "../log.service";
import {catchError} from "rxjs";
import {throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    token = '1eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxQG1haWwuY29tIiwic3ViIjoxLCJzaWduYXR1cmUiOiJhY2Nlc3NfdG9rZW46MTY0ODU1OTIzMDcwMSIsImlhdCI6MTY0ODU1OTIzMCwiZXhwIjoxNjQ4NTYyODMwfQ.z8iDQ14CaCf__I0oo8-TpzaYBiO9uwdtYI0ag2PxO_E';

    constructor(
        private readonly http: HttpClient,
        private readonly logger: LogService
    ) {}

    public getUser(id: any) {
        const url = `http://localhost:3000/api/profile/${id}`;
        this.logger.log(`Call ${url}`);
        return this.http.get(url, {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }).pipe(catchError(error => {
            console.log(error);
            return throwError('Error');
        }));
    }
}