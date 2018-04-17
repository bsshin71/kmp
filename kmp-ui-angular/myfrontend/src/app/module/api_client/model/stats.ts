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


export interface Stats {
    blocks_size?: number;
    difficulty?: number;
    estimated_btc_sent?: number;
    estimated_transaction_volume_usd?: number;
    hash_rate?: number;
    market_price_usd?: number;
    miners_revenue_btc?: number;
    miners_revenue_usd?: number;
    minutes_between_blocks?: number;
    n_blocks_mined?: number;
    n_blocks_total?: number;
    n_btc_mined?: number;
    n_tx?: number;
    nextretarget?: number;
    timestamp?: number;
    total_btc_sent?: number;
    total_fees_btc?: number;
    totalbc?: number;
    trade_volume_btc?: number;
    trade_volume_usd?: number;
}
