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
import { EthereumOptions } from './ethereumOptions';
import { Partners } from './partners';
import { ShapeShiftOptions } from './shapeShiftOptions';


export interface WalletOptions {
    android?: { [key: string]: boolean; };
    androidBuyPercent?: number;
    androidUpgrade?: { [key: string]: number; };
    bcash?: { [key: string]: number; };
    bchFeePerByte?: number;
    buyWebviewWalletLink?: string;
    ethereum?: EthereumOptions;
    mobile?: { [key: string]: string; };
    mobileInfo?: { [key: string]: string; };
    partners?: Partners;
    shapeshift?: ShapeShiftOptions;
    showBuySellTab?: Array<string>;
}
