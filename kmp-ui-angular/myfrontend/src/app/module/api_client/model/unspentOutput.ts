/**
 * KMP API
 * KMP 에서 제공하는 API를 확인하고 테스트 해볼 수 있습니다.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jdlee726@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Xpub } from './xpub';


export interface UnspentOutput {
    confirmations?: number;
    replayable?: boolean;
    script?: string;
    tx_age?: number;
    tx_hash?: string;
    tx_hash_big_endian?: string;
    tx_index?: number;
    tx_output_n?: number;
    value?: number;
    value_hex?: string;
    xpub?: Xpub;
}