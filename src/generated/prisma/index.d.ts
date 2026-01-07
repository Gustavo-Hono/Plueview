
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Station
 * 
 */
export type Station = $Result.DefaultSelection<Prisma.$StationPayload>
/**
 * Model DataPlueView
 * =========================
 *    Leituras brutas
 * =========================
 */
export type DataPlueView = $Result.DefaultSelection<Prisma.$DataPlueViewPayload>
/**
 * Model WeatherData
 * =========================
 *    Dados meteorológicos
 * =========================
 */
export type WeatherData = $Result.DefaultSelection<Prisma.$WeatherDataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WindDirection: {
  NORTE: 'NORTE',
  NORDESTE: 'NORDESTE',
  LESTE: 'LESTE',
  SUDESTE: 'SUDESTE',
  SUL: 'SUL',
  SUDOESTE: 'SUDOESTE',
  OESTE: 'OESTE',
  NOROESTE: 'NOROESTE'
};

export type WindDirection = (typeof WindDirection)[keyof typeof WindDirection]

}

export type WindDirection = $Enums.WindDirection

export const WindDirection: typeof $Enums.WindDirection

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stations
 * const stations = await prisma.station.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Stations
   * const stations = await prisma.station.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.station`: Exposes CRUD operations for the **Station** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stations
    * const stations = await prisma.station.findMany()
    * ```
    */
  get station(): Prisma.StationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataPlueView`: Exposes CRUD operations for the **DataPlueView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataPlueViews
    * const dataPlueViews = await prisma.dataPlueView.findMany()
    * ```
    */
  get dataPlueView(): Prisma.DataPlueViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weatherData`: Exposes CRUD operations for the **WeatherData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeatherData
    * const weatherData = await prisma.weatherData.findMany()
    * ```
    */
  get weatherData(): Prisma.WeatherDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Station: 'Station',
    DataPlueView: 'DataPlueView',
    WeatherData: 'WeatherData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "station" | "dataPlueView" | "weatherData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Station: {
        payload: Prisma.$StationPayload<ExtArgs>
        fields: Prisma.StationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findFirst: {
            args: Prisma.StationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findMany: {
            args: Prisma.StationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          create: {
            args: Prisma.StationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          createMany: {
            args: Prisma.StationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          delete: {
            args: Prisma.StationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          update: {
            args: Prisma.StationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          deleteMany: {
            args: Prisma.StationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          upsert: {
            args: Prisma.StationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          aggregate: {
            args: Prisma.StationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStation>
          }
          groupBy: {
            args: Prisma.StationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StationCountArgs<ExtArgs>
            result: $Utils.Optional<StationCountAggregateOutputType> | number
          }
        }
      }
      DataPlueView: {
        payload: Prisma.$DataPlueViewPayload<ExtArgs>
        fields: Prisma.DataPlueViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataPlueViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPlueViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataPlueViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPlueViewPayload>
          }
          findFirst: {
            args: Prisma.DataPlueViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPlueViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataPlueViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPlueViewPayload>
          }
          findMany: {
            args: Prisma.DataPlueViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPlueViewPayload>[]
          }
          create: {
            args: Prisma.DataPlueViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPlueViewPayload>
          }
          createMany: {
            args: Prisma.DataPlueViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataPlueViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPlueViewPayload>[]
          }
          delete: {
            args: Prisma.DataPlueViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPlueViewPayload>
          }
          update: {
            args: Prisma.DataPlueViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPlueViewPayload>
          }
          deleteMany: {
            args: Prisma.DataPlueViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataPlueViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataPlueViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPlueViewPayload>[]
          }
          upsert: {
            args: Prisma.DataPlueViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataPlueViewPayload>
          }
          aggregate: {
            args: Prisma.DataPlueViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataPlueView>
          }
          groupBy: {
            args: Prisma.DataPlueViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataPlueViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataPlueViewCountArgs<ExtArgs>
            result: $Utils.Optional<DataPlueViewCountAggregateOutputType> | number
          }
        }
      }
      WeatherData: {
        payload: Prisma.$WeatherDataPayload<ExtArgs>
        fields: Prisma.WeatherDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeatherDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeatherDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          findFirst: {
            args: Prisma.WeatherDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeatherDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          findMany: {
            args: Prisma.WeatherDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>[]
          }
          create: {
            args: Prisma.WeatherDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          createMany: {
            args: Prisma.WeatherDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeatherDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>[]
          }
          delete: {
            args: Prisma.WeatherDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          update: {
            args: Prisma.WeatherDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          deleteMany: {
            args: Prisma.WeatherDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeatherDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeatherDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>[]
          }
          upsert: {
            args: Prisma.WeatherDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherDataPayload>
          }
          aggregate: {
            args: Prisma.WeatherDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeatherData>
          }
          groupBy: {
            args: Prisma.WeatherDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeatherDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeatherDataCountArgs<ExtArgs>
            result: $Utils.Optional<WeatherDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    station?: StationOmit
    dataPlueView?: DataPlueViewOmit
    weatherData?: WeatherDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StationCountOutputType
   */

  export type StationCountOutputType = {
    readings: number
    weatherData: number
  }

  export type StationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | StationCountOutputTypeCountReadingsArgs
    weatherData?: boolean | StationCountOutputTypeCountWeatherDataArgs
  }

  // Custom InputTypes
  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationCountOutputType
     */
    select?: StationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataPlueViewWhereInput
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountWeatherDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Station
   */

  export type AggregateStation = {
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  export type StationAvgAggregateOutputType = {
    id: number | null
  }

  export type StationSumAggregateOutputType = {
    id: number | null
  }

  export type StationMinAggregateOutputType = {
    id: number | null
    name: string | null
    macAddress: string | null
  }

  export type StationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    macAddress: string | null
  }

  export type StationCountAggregateOutputType = {
    id: number
    name: number
    macAddress: number
    _all: number
  }


  export type StationAvgAggregateInputType = {
    id?: true
  }

  export type StationSumAggregateInputType = {
    id?: true
  }

  export type StationMinAggregateInputType = {
    id?: true
    name?: true
    macAddress?: true
  }

  export type StationMaxAggregateInputType = {
    id?: true
    name?: true
    macAddress?: true
  }

  export type StationCountAggregateInputType = {
    id?: true
    name?: true
    macAddress?: true
    _all?: true
  }

  export type StationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Station to aggregate.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stations
    **/
    _count?: true | StationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationMaxAggregateInputType
  }

  export type GetStationAggregateType<T extends StationAggregateArgs> = {
        [P in keyof T & keyof AggregateStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStation[P]>
      : GetScalarType<T[P], AggregateStation[P]>
  }




  export type StationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationWhereInput
    orderBy?: StationOrderByWithAggregationInput | StationOrderByWithAggregationInput[]
    by: StationScalarFieldEnum[] | StationScalarFieldEnum
    having?: StationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationCountAggregateInputType | true
    _avg?: StationAvgAggregateInputType
    _sum?: StationSumAggregateInputType
    _min?: StationMinAggregateInputType
    _max?: StationMaxAggregateInputType
  }

  export type StationGroupByOutputType = {
    id: number
    name: string
    macAddress: string
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  type GetStationGroupByPayload<T extends StationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationGroupByOutputType[P]>
            : GetScalarType<T[P], StationGroupByOutputType[P]>
        }
      >
    >


  export type StationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    macAddress?: boolean
    readings?: boolean | Station$readingsArgs<ExtArgs>
    weatherData?: boolean | Station$weatherDataArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["station"]>

  export type StationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    macAddress?: boolean
  }, ExtArgs["result"]["station"]>

  export type StationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    macAddress?: boolean
  }, ExtArgs["result"]["station"]>

  export type StationSelectScalar = {
    id?: boolean
    name?: boolean
    macAddress?: boolean
  }

  export type StationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "macAddress", ExtArgs["result"]["station"]>
  export type StationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | Station$readingsArgs<ExtArgs>
    weatherData?: boolean | Station$weatherDataArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Station"
    objects: {
      readings: Prisma.$DataPlueViewPayload<ExtArgs>[]
      weatherData: Prisma.$WeatherDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      macAddress: string
    }, ExtArgs["result"]["station"]>
    composites: {}
  }

  type StationGetPayload<S extends boolean | null | undefined | StationDefaultArgs> = $Result.GetResult<Prisma.$StationPayload, S>

  type StationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StationCountAggregateInputType | true
    }

  export interface StationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Station'], meta: { name: 'Station' } }
    /**
     * Find zero or one Station that matches the filter.
     * @param {StationFindUniqueArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StationFindUniqueArgs>(args: SelectSubset<T, StationFindUniqueArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Station that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StationFindUniqueOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StationFindUniqueOrThrowArgs>(args: SelectSubset<T, StationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Station that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StationFindFirstArgs>(args?: SelectSubset<T, StationFindFirstArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Station that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StationFindFirstOrThrowArgs>(args?: SelectSubset<T, StationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stations
     * const stations = await prisma.station.findMany()
     * 
     * // Get first 10 Stations
     * const stations = await prisma.station.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationWithIdOnly = await prisma.station.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StationFindManyArgs>(args?: SelectSubset<T, StationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Station.
     * @param {StationCreateArgs} args - Arguments to create a Station.
     * @example
     * // Create one Station
     * const Station = await prisma.station.create({
     *   data: {
     *     // ... data to create a Station
     *   }
     * })
     * 
     */
    create<T extends StationCreateArgs>(args: SelectSubset<T, StationCreateArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stations.
     * @param {StationCreateManyArgs} args - Arguments to create many Stations.
     * @example
     * // Create many Stations
     * const station = await prisma.station.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StationCreateManyArgs>(args?: SelectSubset<T, StationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stations and returns the data saved in the database.
     * @param {StationCreateManyAndReturnArgs} args - Arguments to create many Stations.
     * @example
     * // Create many Stations
     * const station = await prisma.station.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stations and only return the `id`
     * const stationWithIdOnly = await prisma.station.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StationCreateManyAndReturnArgs>(args?: SelectSubset<T, StationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Station.
     * @param {StationDeleteArgs} args - Arguments to delete one Station.
     * @example
     * // Delete one Station
     * const Station = await prisma.station.delete({
     *   where: {
     *     // ... filter to delete one Station
     *   }
     * })
     * 
     */
    delete<T extends StationDeleteArgs>(args: SelectSubset<T, StationDeleteArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Station.
     * @param {StationUpdateArgs} args - Arguments to update one Station.
     * @example
     * // Update one Station
     * const station = await prisma.station.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StationUpdateArgs>(args: SelectSubset<T, StationUpdateArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stations.
     * @param {StationDeleteManyArgs} args - Arguments to filter Stations to delete.
     * @example
     * // Delete a few Stations
     * const { count } = await prisma.station.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StationDeleteManyArgs>(args?: SelectSubset<T, StationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StationUpdateManyArgs>(args: SelectSubset<T, StationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations and returns the data updated in the database.
     * @param {StationUpdateManyAndReturnArgs} args - Arguments to update many Stations.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stations and only return the `id`
     * const stationWithIdOnly = await prisma.station.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StationUpdateManyAndReturnArgs>(args: SelectSubset<T, StationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Station.
     * @param {StationUpsertArgs} args - Arguments to update or create a Station.
     * @example
     * // Update or create a Station
     * const station = await prisma.station.upsert({
     *   create: {
     *     // ... data to create a Station
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Station we want to update
     *   }
     * })
     */
    upsert<T extends StationUpsertArgs>(args: SelectSubset<T, StationUpsertArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationCountArgs} args - Arguments to filter Stations to count.
     * @example
     * // Count the number of Stations
     * const count = await prisma.station.count({
     *   where: {
     *     // ... the filter for the Stations we want to count
     *   }
     * })
    **/
    count<T extends StationCountArgs>(
      args?: Subset<T, StationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StationAggregateArgs>(args: Subset<T, StationAggregateArgs>): Prisma.PrismaPromise<GetStationAggregateType<T>>

    /**
     * Group by Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StationGroupByArgs['orderBy'] }
        : { orderBy?: StationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Station model
   */
  readonly fields: StationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Station.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    readings<T extends Station$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Station$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPlueViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weatherData<T extends Station$weatherDataArgs<ExtArgs> = {}>(args?: Subset<T, Station$weatherDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Station model
   */
  interface StationFieldRefs {
    readonly id: FieldRef<"Station", 'Int'>
    readonly name: FieldRef<"Station", 'String'>
    readonly macAddress: FieldRef<"Station", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Station findUnique
   */
  export type StationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station findUniqueOrThrow
   */
  export type StationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station findFirst
   */
  export type StationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station findFirstOrThrow
   */
  export type StationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station findMany
   */
  export type StationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Stations to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station create
   */
  export type StationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to create a Station.
     */
    data: XOR<StationCreateInput, StationUncheckedCreateInput>
  }

  /**
   * Station createMany
   */
  export type StationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Station createManyAndReturn
   */
  export type StationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Station update
   */
  export type StationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to update a Station.
     */
    data: XOR<StationUpdateInput, StationUncheckedUpdateInput>
    /**
     * Choose, which Station to update.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station updateMany
   */
  export type StationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to update.
     */
    limit?: number
  }

  /**
   * Station updateManyAndReturn
   */
  export type StationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to update.
     */
    limit?: number
  }

  /**
   * Station upsert
   */
  export type StationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The filter to search for the Station to update in case it exists.
     */
    where: StationWhereUniqueInput
    /**
     * In case the Station found by the `where` argument doesn't exist, create a new Station with this data.
     */
    create: XOR<StationCreateInput, StationUncheckedCreateInput>
    /**
     * In case the Station was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StationUpdateInput, StationUncheckedUpdateInput>
  }

  /**
   * Station delete
   */
  export type StationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter which Station to delete.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station deleteMany
   */
  export type StationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stations to delete
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to delete.
     */
    limit?: number
  }

  /**
   * Station.readings
   */
  export type Station$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewInclude<ExtArgs> | null
    where?: DataPlueViewWhereInput
    orderBy?: DataPlueViewOrderByWithRelationInput | DataPlueViewOrderByWithRelationInput[]
    cursor?: DataPlueViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataPlueViewScalarFieldEnum | DataPlueViewScalarFieldEnum[]
  }

  /**
   * Station.weatherData
   */
  export type Station$weatherDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    where?: WeatherDataWhereInput
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    cursor?: WeatherDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeatherDataScalarFieldEnum | WeatherDataScalarFieldEnum[]
  }

  /**
   * Station without action
   */
  export type StationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
  }


  /**
   * Model DataPlueView
   */

  export type AggregateDataPlueView = {
    _count: DataPlueViewCountAggregateOutputType | null
    _avg: DataPlueViewAvgAggregateOutputType | null
    _sum: DataPlueViewSumAggregateOutputType | null
    _min: DataPlueViewMinAggregateOutputType | null
    _max: DataPlueViewMaxAggregateOutputType | null
  }

  export type DataPlueViewAvgAggregateOutputType = {
    id: number | null
    battery: number | null
    ConsumoPluviometro: number | null
    ConsumoVelocidadeVento: number | null
    ConsumoDirecaoVento: number | null
    ConsumoTemperatura: number | null
    ConsumoUmidade: number | null
    stationId: number | null
  }

  export type DataPlueViewSumAggregateOutputType = {
    id: number | null
    battery: number | null
    ConsumoPluviometro: number | null
    ConsumoVelocidadeVento: number | null
    ConsumoDirecaoVento: number | null
    ConsumoTemperatura: number | null
    ConsumoUmidade: number | null
    stationId: number | null
  }

  export type DataPlueViewMinAggregateOutputType = {
    id: number | null
    time: Date | null
    battery: number | null
    ConsumoPluviometro: number | null
    ConsumoVelocidadeVento: number | null
    ConsumoDirecaoVento: number | null
    ConsumoTemperatura: number | null
    ConsumoUmidade: number | null
    stationId: number | null
  }

  export type DataPlueViewMaxAggregateOutputType = {
    id: number | null
    time: Date | null
    battery: number | null
    ConsumoPluviometro: number | null
    ConsumoVelocidadeVento: number | null
    ConsumoDirecaoVento: number | null
    ConsumoTemperatura: number | null
    ConsumoUmidade: number | null
    stationId: number | null
  }

  export type DataPlueViewCountAggregateOutputType = {
    id: number
    time: number
    battery: number
    ConsumoPluviometro: number
    ConsumoVelocidadeVento: number
    ConsumoDirecaoVento: number
    ConsumoTemperatura: number
    ConsumoUmidade: number
    stationId: number
    _all: number
  }


  export type DataPlueViewAvgAggregateInputType = {
    id?: true
    battery?: true
    ConsumoPluviometro?: true
    ConsumoVelocidadeVento?: true
    ConsumoDirecaoVento?: true
    ConsumoTemperatura?: true
    ConsumoUmidade?: true
    stationId?: true
  }

  export type DataPlueViewSumAggregateInputType = {
    id?: true
    battery?: true
    ConsumoPluviometro?: true
    ConsumoVelocidadeVento?: true
    ConsumoDirecaoVento?: true
    ConsumoTemperatura?: true
    ConsumoUmidade?: true
    stationId?: true
  }

  export type DataPlueViewMinAggregateInputType = {
    id?: true
    time?: true
    battery?: true
    ConsumoPluviometro?: true
    ConsumoVelocidadeVento?: true
    ConsumoDirecaoVento?: true
    ConsumoTemperatura?: true
    ConsumoUmidade?: true
    stationId?: true
  }

  export type DataPlueViewMaxAggregateInputType = {
    id?: true
    time?: true
    battery?: true
    ConsumoPluviometro?: true
    ConsumoVelocidadeVento?: true
    ConsumoDirecaoVento?: true
    ConsumoTemperatura?: true
    ConsumoUmidade?: true
    stationId?: true
  }

  export type DataPlueViewCountAggregateInputType = {
    id?: true
    time?: true
    battery?: true
    ConsumoPluviometro?: true
    ConsumoVelocidadeVento?: true
    ConsumoDirecaoVento?: true
    ConsumoTemperatura?: true
    ConsumoUmidade?: true
    stationId?: true
    _all?: true
  }

  export type DataPlueViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPlueView to aggregate.
     */
    where?: DataPlueViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPlueViews to fetch.
     */
    orderBy?: DataPlueViewOrderByWithRelationInput | DataPlueViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataPlueViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPlueViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPlueViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataPlueViews
    **/
    _count?: true | DataPlueViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataPlueViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataPlueViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataPlueViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataPlueViewMaxAggregateInputType
  }

  export type GetDataPlueViewAggregateType<T extends DataPlueViewAggregateArgs> = {
        [P in keyof T & keyof AggregateDataPlueView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataPlueView[P]>
      : GetScalarType<T[P], AggregateDataPlueView[P]>
  }




  export type DataPlueViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataPlueViewWhereInput
    orderBy?: DataPlueViewOrderByWithAggregationInput | DataPlueViewOrderByWithAggregationInput[]
    by: DataPlueViewScalarFieldEnum[] | DataPlueViewScalarFieldEnum
    having?: DataPlueViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataPlueViewCountAggregateInputType | true
    _avg?: DataPlueViewAvgAggregateInputType
    _sum?: DataPlueViewSumAggregateInputType
    _min?: DataPlueViewMinAggregateInputType
    _max?: DataPlueViewMaxAggregateInputType
  }

  export type DataPlueViewGroupByOutputType = {
    id: number
    time: Date
    battery: number
    ConsumoPluviometro: number | null
    ConsumoVelocidadeVento: number | null
    ConsumoDirecaoVento: number | null
    ConsumoTemperatura: number | null
    ConsumoUmidade: number | null
    stationId: number
    _count: DataPlueViewCountAggregateOutputType | null
    _avg: DataPlueViewAvgAggregateOutputType | null
    _sum: DataPlueViewSumAggregateOutputType | null
    _min: DataPlueViewMinAggregateOutputType | null
    _max: DataPlueViewMaxAggregateOutputType | null
  }

  type GetDataPlueViewGroupByPayload<T extends DataPlueViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataPlueViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataPlueViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataPlueViewGroupByOutputType[P]>
            : GetScalarType<T[P], DataPlueViewGroupByOutputType[P]>
        }
      >
    >


  export type DataPlueViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    battery?: boolean
    ConsumoPluviometro?: boolean
    ConsumoVelocidadeVento?: boolean
    ConsumoDirecaoVento?: boolean
    ConsumoTemperatura?: boolean
    ConsumoUmidade?: boolean
    stationId?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataPlueView"]>

  export type DataPlueViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    battery?: boolean
    ConsumoPluviometro?: boolean
    ConsumoVelocidadeVento?: boolean
    ConsumoDirecaoVento?: boolean
    ConsumoTemperatura?: boolean
    ConsumoUmidade?: boolean
    stationId?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataPlueView"]>

  export type DataPlueViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    battery?: boolean
    ConsumoPluviometro?: boolean
    ConsumoVelocidadeVento?: boolean
    ConsumoDirecaoVento?: boolean
    ConsumoTemperatura?: boolean
    ConsumoUmidade?: boolean
    stationId?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataPlueView"]>

  export type DataPlueViewSelectScalar = {
    id?: boolean
    time?: boolean
    battery?: boolean
    ConsumoPluviometro?: boolean
    ConsumoVelocidadeVento?: boolean
    ConsumoDirecaoVento?: boolean
    ConsumoTemperatura?: boolean
    ConsumoUmidade?: boolean
    stationId?: boolean
  }

  export type DataPlueViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "time" | "battery" | "ConsumoPluviometro" | "ConsumoVelocidadeVento" | "ConsumoDirecaoVento" | "ConsumoTemperatura" | "ConsumoUmidade" | "stationId", ExtArgs["result"]["dataPlueView"]>
  export type DataPlueViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }
  export type DataPlueViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }
  export type DataPlueViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }

  export type $DataPlueViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataPlueView"
    objects: {
      station: Prisma.$StationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      time: Date
      battery: number
      ConsumoPluviometro: number | null
      ConsumoVelocidadeVento: number | null
      ConsumoDirecaoVento: number | null
      ConsumoTemperatura: number | null
      ConsumoUmidade: number | null
      stationId: number
    }, ExtArgs["result"]["dataPlueView"]>
    composites: {}
  }

  type DataPlueViewGetPayload<S extends boolean | null | undefined | DataPlueViewDefaultArgs> = $Result.GetResult<Prisma.$DataPlueViewPayload, S>

  type DataPlueViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataPlueViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataPlueViewCountAggregateInputType | true
    }

  export interface DataPlueViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataPlueView'], meta: { name: 'DataPlueView' } }
    /**
     * Find zero or one DataPlueView that matches the filter.
     * @param {DataPlueViewFindUniqueArgs} args - Arguments to find a DataPlueView
     * @example
     * // Get one DataPlueView
     * const dataPlueView = await prisma.dataPlueView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataPlueViewFindUniqueArgs>(args: SelectSubset<T, DataPlueViewFindUniqueArgs<ExtArgs>>): Prisma__DataPlueViewClient<$Result.GetResult<Prisma.$DataPlueViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataPlueView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataPlueViewFindUniqueOrThrowArgs} args - Arguments to find a DataPlueView
     * @example
     * // Get one DataPlueView
     * const dataPlueView = await prisma.dataPlueView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataPlueViewFindUniqueOrThrowArgs>(args: SelectSubset<T, DataPlueViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataPlueViewClient<$Result.GetResult<Prisma.$DataPlueViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPlueView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPlueViewFindFirstArgs} args - Arguments to find a DataPlueView
     * @example
     * // Get one DataPlueView
     * const dataPlueView = await prisma.dataPlueView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataPlueViewFindFirstArgs>(args?: SelectSubset<T, DataPlueViewFindFirstArgs<ExtArgs>>): Prisma__DataPlueViewClient<$Result.GetResult<Prisma.$DataPlueViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataPlueView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPlueViewFindFirstOrThrowArgs} args - Arguments to find a DataPlueView
     * @example
     * // Get one DataPlueView
     * const dataPlueView = await prisma.dataPlueView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataPlueViewFindFirstOrThrowArgs>(args?: SelectSubset<T, DataPlueViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataPlueViewClient<$Result.GetResult<Prisma.$DataPlueViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataPlueViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPlueViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataPlueViews
     * const dataPlueViews = await prisma.dataPlueView.findMany()
     * 
     * // Get first 10 DataPlueViews
     * const dataPlueViews = await prisma.dataPlueView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataPlueViewWithIdOnly = await prisma.dataPlueView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataPlueViewFindManyArgs>(args?: SelectSubset<T, DataPlueViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPlueViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataPlueView.
     * @param {DataPlueViewCreateArgs} args - Arguments to create a DataPlueView.
     * @example
     * // Create one DataPlueView
     * const DataPlueView = await prisma.dataPlueView.create({
     *   data: {
     *     // ... data to create a DataPlueView
     *   }
     * })
     * 
     */
    create<T extends DataPlueViewCreateArgs>(args: SelectSubset<T, DataPlueViewCreateArgs<ExtArgs>>): Prisma__DataPlueViewClient<$Result.GetResult<Prisma.$DataPlueViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataPlueViews.
     * @param {DataPlueViewCreateManyArgs} args - Arguments to create many DataPlueViews.
     * @example
     * // Create many DataPlueViews
     * const dataPlueView = await prisma.dataPlueView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataPlueViewCreateManyArgs>(args?: SelectSubset<T, DataPlueViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataPlueViews and returns the data saved in the database.
     * @param {DataPlueViewCreateManyAndReturnArgs} args - Arguments to create many DataPlueViews.
     * @example
     * // Create many DataPlueViews
     * const dataPlueView = await prisma.dataPlueView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataPlueViews and only return the `id`
     * const dataPlueViewWithIdOnly = await prisma.dataPlueView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataPlueViewCreateManyAndReturnArgs>(args?: SelectSubset<T, DataPlueViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPlueViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataPlueView.
     * @param {DataPlueViewDeleteArgs} args - Arguments to delete one DataPlueView.
     * @example
     * // Delete one DataPlueView
     * const DataPlueView = await prisma.dataPlueView.delete({
     *   where: {
     *     // ... filter to delete one DataPlueView
     *   }
     * })
     * 
     */
    delete<T extends DataPlueViewDeleteArgs>(args: SelectSubset<T, DataPlueViewDeleteArgs<ExtArgs>>): Prisma__DataPlueViewClient<$Result.GetResult<Prisma.$DataPlueViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataPlueView.
     * @param {DataPlueViewUpdateArgs} args - Arguments to update one DataPlueView.
     * @example
     * // Update one DataPlueView
     * const dataPlueView = await prisma.dataPlueView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataPlueViewUpdateArgs>(args: SelectSubset<T, DataPlueViewUpdateArgs<ExtArgs>>): Prisma__DataPlueViewClient<$Result.GetResult<Prisma.$DataPlueViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataPlueViews.
     * @param {DataPlueViewDeleteManyArgs} args - Arguments to filter DataPlueViews to delete.
     * @example
     * // Delete a few DataPlueViews
     * const { count } = await prisma.dataPlueView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataPlueViewDeleteManyArgs>(args?: SelectSubset<T, DataPlueViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataPlueViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPlueViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataPlueViews
     * const dataPlueView = await prisma.dataPlueView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataPlueViewUpdateManyArgs>(args: SelectSubset<T, DataPlueViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataPlueViews and returns the data updated in the database.
     * @param {DataPlueViewUpdateManyAndReturnArgs} args - Arguments to update many DataPlueViews.
     * @example
     * // Update many DataPlueViews
     * const dataPlueView = await prisma.dataPlueView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataPlueViews and only return the `id`
     * const dataPlueViewWithIdOnly = await prisma.dataPlueView.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DataPlueViewUpdateManyAndReturnArgs>(args: SelectSubset<T, DataPlueViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataPlueViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataPlueView.
     * @param {DataPlueViewUpsertArgs} args - Arguments to update or create a DataPlueView.
     * @example
     * // Update or create a DataPlueView
     * const dataPlueView = await prisma.dataPlueView.upsert({
     *   create: {
     *     // ... data to create a DataPlueView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataPlueView we want to update
     *   }
     * })
     */
    upsert<T extends DataPlueViewUpsertArgs>(args: SelectSubset<T, DataPlueViewUpsertArgs<ExtArgs>>): Prisma__DataPlueViewClient<$Result.GetResult<Prisma.$DataPlueViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataPlueViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPlueViewCountArgs} args - Arguments to filter DataPlueViews to count.
     * @example
     * // Count the number of DataPlueViews
     * const count = await prisma.dataPlueView.count({
     *   where: {
     *     // ... the filter for the DataPlueViews we want to count
     *   }
     * })
    **/
    count<T extends DataPlueViewCountArgs>(
      args?: Subset<T, DataPlueViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataPlueViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataPlueView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPlueViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataPlueViewAggregateArgs>(args: Subset<T, DataPlueViewAggregateArgs>): Prisma.PrismaPromise<GetDataPlueViewAggregateType<T>>

    /**
     * Group by DataPlueView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPlueViewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataPlueViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataPlueViewGroupByArgs['orderBy'] }
        : { orderBy?: DataPlueViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataPlueViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataPlueViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataPlueView model
   */
  readonly fields: DataPlueViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataPlueView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataPlueViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    station<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataPlueView model
   */
  interface DataPlueViewFieldRefs {
    readonly id: FieldRef<"DataPlueView", 'Int'>
    readonly time: FieldRef<"DataPlueView", 'DateTime'>
    readonly battery: FieldRef<"DataPlueView", 'Int'>
    readonly ConsumoPluviometro: FieldRef<"DataPlueView", 'Float'>
    readonly ConsumoVelocidadeVento: FieldRef<"DataPlueView", 'Float'>
    readonly ConsumoDirecaoVento: FieldRef<"DataPlueView", 'Float'>
    readonly ConsumoTemperatura: FieldRef<"DataPlueView", 'Float'>
    readonly ConsumoUmidade: FieldRef<"DataPlueView", 'Float'>
    readonly stationId: FieldRef<"DataPlueView", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DataPlueView findUnique
   */
  export type DataPlueViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewInclude<ExtArgs> | null
    /**
     * Filter, which DataPlueView to fetch.
     */
    where: DataPlueViewWhereUniqueInput
  }

  /**
   * DataPlueView findUniqueOrThrow
   */
  export type DataPlueViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewInclude<ExtArgs> | null
    /**
     * Filter, which DataPlueView to fetch.
     */
    where: DataPlueViewWhereUniqueInput
  }

  /**
   * DataPlueView findFirst
   */
  export type DataPlueViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewInclude<ExtArgs> | null
    /**
     * Filter, which DataPlueView to fetch.
     */
    where?: DataPlueViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPlueViews to fetch.
     */
    orderBy?: DataPlueViewOrderByWithRelationInput | DataPlueViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPlueViews.
     */
    cursor?: DataPlueViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPlueViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPlueViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPlueViews.
     */
    distinct?: DataPlueViewScalarFieldEnum | DataPlueViewScalarFieldEnum[]
  }

  /**
   * DataPlueView findFirstOrThrow
   */
  export type DataPlueViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewInclude<ExtArgs> | null
    /**
     * Filter, which DataPlueView to fetch.
     */
    where?: DataPlueViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPlueViews to fetch.
     */
    orderBy?: DataPlueViewOrderByWithRelationInput | DataPlueViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataPlueViews.
     */
    cursor?: DataPlueViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPlueViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPlueViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataPlueViews.
     */
    distinct?: DataPlueViewScalarFieldEnum | DataPlueViewScalarFieldEnum[]
  }

  /**
   * DataPlueView findMany
   */
  export type DataPlueViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewInclude<ExtArgs> | null
    /**
     * Filter, which DataPlueViews to fetch.
     */
    where?: DataPlueViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataPlueViews to fetch.
     */
    orderBy?: DataPlueViewOrderByWithRelationInput | DataPlueViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataPlueViews.
     */
    cursor?: DataPlueViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataPlueViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataPlueViews.
     */
    skip?: number
    distinct?: DataPlueViewScalarFieldEnum | DataPlueViewScalarFieldEnum[]
  }

  /**
   * DataPlueView create
   */
  export type DataPlueViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewInclude<ExtArgs> | null
    /**
     * The data needed to create a DataPlueView.
     */
    data: XOR<DataPlueViewCreateInput, DataPlueViewUncheckedCreateInput>
  }

  /**
   * DataPlueView createMany
   */
  export type DataPlueViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataPlueViews.
     */
    data: DataPlueViewCreateManyInput | DataPlueViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataPlueView createManyAndReturn
   */
  export type DataPlueViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * The data used to create many DataPlueViews.
     */
    data: DataPlueViewCreateManyInput | DataPlueViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataPlueView update
   */
  export type DataPlueViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewInclude<ExtArgs> | null
    /**
     * The data needed to update a DataPlueView.
     */
    data: XOR<DataPlueViewUpdateInput, DataPlueViewUncheckedUpdateInput>
    /**
     * Choose, which DataPlueView to update.
     */
    where: DataPlueViewWhereUniqueInput
  }

  /**
   * DataPlueView updateMany
   */
  export type DataPlueViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataPlueViews.
     */
    data: XOR<DataPlueViewUpdateManyMutationInput, DataPlueViewUncheckedUpdateManyInput>
    /**
     * Filter which DataPlueViews to update
     */
    where?: DataPlueViewWhereInput
    /**
     * Limit how many DataPlueViews to update.
     */
    limit?: number
  }

  /**
   * DataPlueView updateManyAndReturn
   */
  export type DataPlueViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * The data used to update DataPlueViews.
     */
    data: XOR<DataPlueViewUpdateManyMutationInput, DataPlueViewUncheckedUpdateManyInput>
    /**
     * Filter which DataPlueViews to update
     */
    where?: DataPlueViewWhereInput
    /**
     * Limit how many DataPlueViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataPlueView upsert
   */
  export type DataPlueViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewInclude<ExtArgs> | null
    /**
     * The filter to search for the DataPlueView to update in case it exists.
     */
    where: DataPlueViewWhereUniqueInput
    /**
     * In case the DataPlueView found by the `where` argument doesn't exist, create a new DataPlueView with this data.
     */
    create: XOR<DataPlueViewCreateInput, DataPlueViewUncheckedCreateInput>
    /**
     * In case the DataPlueView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataPlueViewUpdateInput, DataPlueViewUncheckedUpdateInput>
  }

  /**
   * DataPlueView delete
   */
  export type DataPlueViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewInclude<ExtArgs> | null
    /**
     * Filter which DataPlueView to delete.
     */
    where: DataPlueViewWhereUniqueInput
  }

  /**
   * DataPlueView deleteMany
   */
  export type DataPlueViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataPlueViews to delete
     */
    where?: DataPlueViewWhereInput
    /**
     * Limit how many DataPlueViews to delete.
     */
    limit?: number
  }

  /**
   * DataPlueView without action
   */
  export type DataPlueViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPlueView
     */
    select?: DataPlueViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataPlueView
     */
    omit?: DataPlueViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataPlueViewInclude<ExtArgs> | null
  }


  /**
   * Model WeatherData
   */

  export type AggregateWeatherData = {
    _count: WeatherDataCountAggregateOutputType | null
    _avg: WeatherDataAvgAggregateOutputType | null
    _sum: WeatherDataSumAggregateOutputType | null
    _min: WeatherDataMinAggregateOutputType | null
    _max: WeatherDataMaxAggregateOutputType | null
  }

  export type WeatherDataAvgAggregateOutputType = {
    id: number | null
    umidade: number | null
    temperatura: number | null
    velocidadeVento: number | null
    quantidadeChuva: number | null
    stationId: number | null
  }

  export type WeatherDataSumAggregateOutputType = {
    id: number | null
    umidade: number | null
    temperatura: number | null
    velocidadeVento: number | null
    quantidadeChuva: number | null
    stationId: number | null
  }

  export type WeatherDataMinAggregateOutputType = {
    id: number | null
    umidade: number | null
    temperatura: number | null
    velocidadeVento: number | null
    direcaoVento: $Enums.WindDirection | null
    quantidadeChuva: number | null
    dataMedicao: Date | null
    stationId: number | null
  }

  export type WeatherDataMaxAggregateOutputType = {
    id: number | null
    umidade: number | null
    temperatura: number | null
    velocidadeVento: number | null
    direcaoVento: $Enums.WindDirection | null
    quantidadeChuva: number | null
    dataMedicao: Date | null
    stationId: number | null
  }

  export type WeatherDataCountAggregateOutputType = {
    id: number
    umidade: number
    temperatura: number
    velocidadeVento: number
    direcaoVento: number
    quantidadeChuva: number
    dataMedicao: number
    stationId: number
    _all: number
  }


  export type WeatherDataAvgAggregateInputType = {
    id?: true
    umidade?: true
    temperatura?: true
    velocidadeVento?: true
    quantidadeChuva?: true
    stationId?: true
  }

  export type WeatherDataSumAggregateInputType = {
    id?: true
    umidade?: true
    temperatura?: true
    velocidadeVento?: true
    quantidadeChuva?: true
    stationId?: true
  }

  export type WeatherDataMinAggregateInputType = {
    id?: true
    umidade?: true
    temperatura?: true
    velocidadeVento?: true
    direcaoVento?: true
    quantidadeChuva?: true
    dataMedicao?: true
    stationId?: true
  }

  export type WeatherDataMaxAggregateInputType = {
    id?: true
    umidade?: true
    temperatura?: true
    velocidadeVento?: true
    direcaoVento?: true
    quantidadeChuva?: true
    dataMedicao?: true
    stationId?: true
  }

  export type WeatherDataCountAggregateInputType = {
    id?: true
    umidade?: true
    temperatura?: true
    velocidadeVento?: true
    direcaoVento?: true
    quantidadeChuva?: true
    dataMedicao?: true
    stationId?: true
    _all?: true
  }

  export type WeatherDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherData to aggregate.
     */
    where?: WeatherDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherData to fetch.
     */
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeatherDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeatherData
    **/
    _count?: true | WeatherDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeatherDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeatherDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeatherDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeatherDataMaxAggregateInputType
  }

  export type GetWeatherDataAggregateType<T extends WeatherDataAggregateArgs> = {
        [P in keyof T & keyof AggregateWeatherData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeatherData[P]>
      : GetScalarType<T[P], AggregateWeatherData[P]>
  }




  export type WeatherDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherDataWhereInput
    orderBy?: WeatherDataOrderByWithAggregationInput | WeatherDataOrderByWithAggregationInput[]
    by: WeatherDataScalarFieldEnum[] | WeatherDataScalarFieldEnum
    having?: WeatherDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeatherDataCountAggregateInputType | true
    _avg?: WeatherDataAvgAggregateInputType
    _sum?: WeatherDataSumAggregateInputType
    _min?: WeatherDataMinAggregateInputType
    _max?: WeatherDataMaxAggregateInputType
  }

  export type WeatherDataGroupByOutputType = {
    id: number
    umidade: number
    temperatura: number
    velocidadeVento: number
    direcaoVento: $Enums.WindDirection
    quantidadeChuva: number
    dataMedicao: Date
    stationId: number
    _count: WeatherDataCountAggregateOutputType | null
    _avg: WeatherDataAvgAggregateOutputType | null
    _sum: WeatherDataSumAggregateOutputType | null
    _min: WeatherDataMinAggregateOutputType | null
    _max: WeatherDataMaxAggregateOutputType | null
  }

  type GetWeatherDataGroupByPayload<T extends WeatherDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeatherDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeatherDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeatherDataGroupByOutputType[P]>
            : GetScalarType<T[P], WeatherDataGroupByOutputType[P]>
        }
      >
    >


  export type WeatherDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    umidade?: boolean
    temperatura?: boolean
    velocidadeVento?: boolean
    direcaoVento?: boolean
    quantidadeChuva?: boolean
    dataMedicao?: boolean
    stationId?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weatherData"]>

  export type WeatherDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    umidade?: boolean
    temperatura?: boolean
    velocidadeVento?: boolean
    direcaoVento?: boolean
    quantidadeChuva?: boolean
    dataMedicao?: boolean
    stationId?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weatherData"]>

  export type WeatherDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    umidade?: boolean
    temperatura?: boolean
    velocidadeVento?: boolean
    direcaoVento?: boolean
    quantidadeChuva?: boolean
    dataMedicao?: boolean
    stationId?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weatherData"]>

  export type WeatherDataSelectScalar = {
    id?: boolean
    umidade?: boolean
    temperatura?: boolean
    velocidadeVento?: boolean
    direcaoVento?: boolean
    quantidadeChuva?: boolean
    dataMedicao?: boolean
    stationId?: boolean
  }

  export type WeatherDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "umidade" | "temperatura" | "velocidadeVento" | "direcaoVento" | "quantidadeChuva" | "dataMedicao" | "stationId", ExtArgs["result"]["weatherData"]>
  export type WeatherDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }
  export type WeatherDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }
  export type WeatherDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }

  export type $WeatherDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeatherData"
    objects: {
      station: Prisma.$StationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      umidade: number
      temperatura: number
      velocidadeVento: number
      direcaoVento: $Enums.WindDirection
      quantidadeChuva: number
      dataMedicao: Date
      stationId: number
    }, ExtArgs["result"]["weatherData"]>
    composites: {}
  }

  type WeatherDataGetPayload<S extends boolean | null | undefined | WeatherDataDefaultArgs> = $Result.GetResult<Prisma.$WeatherDataPayload, S>

  type WeatherDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeatherDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeatherDataCountAggregateInputType | true
    }

  export interface WeatherDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeatherData'], meta: { name: 'WeatherData' } }
    /**
     * Find zero or one WeatherData that matches the filter.
     * @param {WeatherDataFindUniqueArgs} args - Arguments to find a WeatherData
     * @example
     * // Get one WeatherData
     * const weatherData = await prisma.weatherData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeatherDataFindUniqueArgs>(args: SelectSubset<T, WeatherDataFindUniqueArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeatherData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeatherDataFindUniqueOrThrowArgs} args - Arguments to find a WeatherData
     * @example
     * // Get one WeatherData
     * const weatherData = await prisma.weatherData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeatherDataFindUniqueOrThrowArgs>(args: SelectSubset<T, WeatherDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeatherData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataFindFirstArgs} args - Arguments to find a WeatherData
     * @example
     * // Get one WeatherData
     * const weatherData = await prisma.weatherData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeatherDataFindFirstArgs>(args?: SelectSubset<T, WeatherDataFindFirstArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeatherData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataFindFirstOrThrowArgs} args - Arguments to find a WeatherData
     * @example
     * // Get one WeatherData
     * const weatherData = await prisma.weatherData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeatherDataFindFirstOrThrowArgs>(args?: SelectSubset<T, WeatherDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeatherData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeatherData
     * const weatherData = await prisma.weatherData.findMany()
     * 
     * // Get first 10 WeatherData
     * const weatherData = await prisma.weatherData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weatherDataWithIdOnly = await prisma.weatherData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeatherDataFindManyArgs>(args?: SelectSubset<T, WeatherDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeatherData.
     * @param {WeatherDataCreateArgs} args - Arguments to create a WeatherData.
     * @example
     * // Create one WeatherData
     * const WeatherData = await prisma.weatherData.create({
     *   data: {
     *     // ... data to create a WeatherData
     *   }
     * })
     * 
     */
    create<T extends WeatherDataCreateArgs>(args: SelectSubset<T, WeatherDataCreateArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeatherData.
     * @param {WeatherDataCreateManyArgs} args - Arguments to create many WeatherData.
     * @example
     * // Create many WeatherData
     * const weatherData = await prisma.weatherData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeatherDataCreateManyArgs>(args?: SelectSubset<T, WeatherDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeatherData and returns the data saved in the database.
     * @param {WeatherDataCreateManyAndReturnArgs} args - Arguments to create many WeatherData.
     * @example
     * // Create many WeatherData
     * const weatherData = await prisma.weatherData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeatherData and only return the `id`
     * const weatherDataWithIdOnly = await prisma.weatherData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeatherDataCreateManyAndReturnArgs>(args?: SelectSubset<T, WeatherDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeatherData.
     * @param {WeatherDataDeleteArgs} args - Arguments to delete one WeatherData.
     * @example
     * // Delete one WeatherData
     * const WeatherData = await prisma.weatherData.delete({
     *   where: {
     *     // ... filter to delete one WeatherData
     *   }
     * })
     * 
     */
    delete<T extends WeatherDataDeleteArgs>(args: SelectSubset<T, WeatherDataDeleteArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeatherData.
     * @param {WeatherDataUpdateArgs} args - Arguments to update one WeatherData.
     * @example
     * // Update one WeatherData
     * const weatherData = await prisma.weatherData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeatherDataUpdateArgs>(args: SelectSubset<T, WeatherDataUpdateArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeatherData.
     * @param {WeatherDataDeleteManyArgs} args - Arguments to filter WeatherData to delete.
     * @example
     * // Delete a few WeatherData
     * const { count } = await prisma.weatherData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeatherDataDeleteManyArgs>(args?: SelectSubset<T, WeatherDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeatherData
     * const weatherData = await prisma.weatherData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeatherDataUpdateManyArgs>(args: SelectSubset<T, WeatherDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherData and returns the data updated in the database.
     * @param {WeatherDataUpdateManyAndReturnArgs} args - Arguments to update many WeatherData.
     * @example
     * // Update many WeatherData
     * const weatherData = await prisma.weatherData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeatherData and only return the `id`
     * const weatherDataWithIdOnly = await prisma.weatherData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeatherDataUpdateManyAndReturnArgs>(args: SelectSubset<T, WeatherDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeatherData.
     * @param {WeatherDataUpsertArgs} args - Arguments to update or create a WeatherData.
     * @example
     * // Update or create a WeatherData
     * const weatherData = await prisma.weatherData.upsert({
     *   create: {
     *     // ... data to create a WeatherData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeatherData we want to update
     *   }
     * })
     */
    upsert<T extends WeatherDataUpsertArgs>(args: SelectSubset<T, WeatherDataUpsertArgs<ExtArgs>>): Prisma__WeatherDataClient<$Result.GetResult<Prisma.$WeatherDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeatherData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataCountArgs} args - Arguments to filter WeatherData to count.
     * @example
     * // Count the number of WeatherData
     * const count = await prisma.weatherData.count({
     *   where: {
     *     // ... the filter for the WeatherData we want to count
     *   }
     * })
    **/
    count<T extends WeatherDataCountArgs>(
      args?: Subset<T, WeatherDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeatherDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeatherData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeatherDataAggregateArgs>(args: Subset<T, WeatherDataAggregateArgs>): Prisma.PrismaPromise<GetWeatherDataAggregateType<T>>

    /**
     * Group by WeatherData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeatherDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeatherDataGroupByArgs['orderBy'] }
        : { orderBy?: WeatherDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeatherDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeatherDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeatherData model
   */
  readonly fields: WeatherDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeatherData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeatherDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    station<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeatherData model
   */
  interface WeatherDataFieldRefs {
    readonly id: FieldRef<"WeatherData", 'Int'>
    readonly umidade: FieldRef<"WeatherData", 'Float'>
    readonly temperatura: FieldRef<"WeatherData", 'Float'>
    readonly velocidadeVento: FieldRef<"WeatherData", 'Float'>
    readonly direcaoVento: FieldRef<"WeatherData", 'WindDirection'>
    readonly quantidadeChuva: FieldRef<"WeatherData", 'Float'>
    readonly dataMedicao: FieldRef<"WeatherData", 'DateTime'>
    readonly stationId: FieldRef<"WeatherData", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WeatherData findUnique
   */
  export type WeatherDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where: WeatherDataWhereUniqueInput
  }

  /**
   * WeatherData findUniqueOrThrow
   */
  export type WeatherDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where: WeatherDataWhereUniqueInput
  }

  /**
   * WeatherData findFirst
   */
  export type WeatherDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where?: WeatherDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherData to fetch.
     */
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherData.
     */
    cursor?: WeatherDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherData.
     */
    distinct?: WeatherDataScalarFieldEnum | WeatherDataScalarFieldEnum[]
  }

  /**
   * WeatherData findFirstOrThrow
   */
  export type WeatherDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where?: WeatherDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherData to fetch.
     */
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherData.
     */
    cursor?: WeatherDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherData.
     */
    distinct?: WeatherDataScalarFieldEnum | WeatherDataScalarFieldEnum[]
  }

  /**
   * WeatherData findMany
   */
  export type WeatherDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * Filter, which WeatherData to fetch.
     */
    where?: WeatherDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherData to fetch.
     */
    orderBy?: WeatherDataOrderByWithRelationInput | WeatherDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeatherData.
     */
    cursor?: WeatherDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherData.
     */
    skip?: number
    distinct?: WeatherDataScalarFieldEnum | WeatherDataScalarFieldEnum[]
  }

  /**
   * WeatherData create
   */
  export type WeatherDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * The data needed to create a WeatherData.
     */
    data: XOR<WeatherDataCreateInput, WeatherDataUncheckedCreateInput>
  }

  /**
   * WeatherData createMany
   */
  export type WeatherDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeatherData.
     */
    data: WeatherDataCreateManyInput | WeatherDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeatherData createManyAndReturn
   */
  export type WeatherDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * The data used to create many WeatherData.
     */
    data: WeatherDataCreateManyInput | WeatherDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeatherData update
   */
  export type WeatherDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * The data needed to update a WeatherData.
     */
    data: XOR<WeatherDataUpdateInput, WeatherDataUncheckedUpdateInput>
    /**
     * Choose, which WeatherData to update.
     */
    where: WeatherDataWhereUniqueInput
  }

  /**
   * WeatherData updateMany
   */
  export type WeatherDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeatherData.
     */
    data: XOR<WeatherDataUpdateManyMutationInput, WeatherDataUncheckedUpdateManyInput>
    /**
     * Filter which WeatherData to update
     */
    where?: WeatherDataWhereInput
    /**
     * Limit how many WeatherData to update.
     */
    limit?: number
  }

  /**
   * WeatherData updateManyAndReturn
   */
  export type WeatherDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * The data used to update WeatherData.
     */
    data: XOR<WeatherDataUpdateManyMutationInput, WeatherDataUncheckedUpdateManyInput>
    /**
     * Filter which WeatherData to update
     */
    where?: WeatherDataWhereInput
    /**
     * Limit how many WeatherData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeatherData upsert
   */
  export type WeatherDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * The filter to search for the WeatherData to update in case it exists.
     */
    where: WeatherDataWhereUniqueInput
    /**
     * In case the WeatherData found by the `where` argument doesn't exist, create a new WeatherData with this data.
     */
    create: XOR<WeatherDataCreateInput, WeatherDataUncheckedCreateInput>
    /**
     * In case the WeatherData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeatherDataUpdateInput, WeatherDataUncheckedUpdateInput>
  }

  /**
   * WeatherData delete
   */
  export type WeatherDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
    /**
     * Filter which WeatherData to delete.
     */
    where: WeatherDataWhereUniqueInput
  }

  /**
   * WeatherData deleteMany
   */
  export type WeatherDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherData to delete
     */
    where?: WeatherDataWhereInput
    /**
     * Limit how many WeatherData to delete.
     */
    limit?: number
  }

  /**
   * WeatherData without action
   */
  export type WeatherDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherData
     */
    select?: WeatherDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherData
     */
    omit?: WeatherDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    macAddress: 'macAddress'
  };

  export type StationScalarFieldEnum = (typeof StationScalarFieldEnum)[keyof typeof StationScalarFieldEnum]


  export const DataPlueViewScalarFieldEnum: {
    id: 'id',
    time: 'time',
    battery: 'battery',
    ConsumoPluviometro: 'ConsumoPluviometro',
    ConsumoVelocidadeVento: 'ConsumoVelocidadeVento',
    ConsumoDirecaoVento: 'ConsumoDirecaoVento',
    ConsumoTemperatura: 'ConsumoTemperatura',
    ConsumoUmidade: 'ConsumoUmidade',
    stationId: 'stationId'
  };

  export type DataPlueViewScalarFieldEnum = (typeof DataPlueViewScalarFieldEnum)[keyof typeof DataPlueViewScalarFieldEnum]


  export const WeatherDataScalarFieldEnum: {
    id: 'id',
    umidade: 'umidade',
    temperatura: 'temperatura',
    velocidadeVento: 'velocidadeVento',
    direcaoVento: 'direcaoVento',
    quantidadeChuva: 'quantidadeChuva',
    dataMedicao: 'dataMedicao',
    stationId: 'stationId'
  };

  export type WeatherDataScalarFieldEnum = (typeof WeatherDataScalarFieldEnum)[keyof typeof WeatherDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'WindDirection'
   */
  export type EnumWindDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WindDirection'>
    


  /**
   * Reference to a field of type 'WindDirection[]'
   */
  export type ListEnumWindDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WindDirection[]'>
    
  /**
   * Deep Input Types
   */


  export type StationWhereInput = {
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    id?: IntFilter<"Station"> | number
    name?: StringFilter<"Station"> | string
    macAddress?: StringFilter<"Station"> | string
    readings?: DataPlueViewListRelationFilter
    weatherData?: WeatherDataListRelationFilter
  }

  export type StationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    macAddress?: SortOrder
    readings?: DataPlueViewOrderByRelationAggregateInput
    weatherData?: WeatherDataOrderByRelationAggregateInput
  }

  export type StationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    macAddress?: string
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    name?: StringFilter<"Station"> | string
    readings?: DataPlueViewListRelationFilter
    weatherData?: WeatherDataListRelationFilter
  }, "id" | "macAddress">

  export type StationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    macAddress?: SortOrder
    _count?: StationCountOrderByAggregateInput
    _avg?: StationAvgOrderByAggregateInput
    _max?: StationMaxOrderByAggregateInput
    _min?: StationMinOrderByAggregateInput
    _sum?: StationSumOrderByAggregateInput
  }

  export type StationScalarWhereWithAggregatesInput = {
    AND?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    OR?: StationScalarWhereWithAggregatesInput[]
    NOT?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Station"> | number
    name?: StringWithAggregatesFilter<"Station"> | string
    macAddress?: StringWithAggregatesFilter<"Station"> | string
  }

  export type DataPlueViewWhereInput = {
    AND?: DataPlueViewWhereInput | DataPlueViewWhereInput[]
    OR?: DataPlueViewWhereInput[]
    NOT?: DataPlueViewWhereInput | DataPlueViewWhereInput[]
    id?: IntFilter<"DataPlueView"> | number
    time?: DateTimeFilter<"DataPlueView"> | Date | string
    battery?: IntFilter<"DataPlueView"> | number
    ConsumoPluviometro?: FloatNullableFilter<"DataPlueView"> | number | null
    ConsumoVelocidadeVento?: FloatNullableFilter<"DataPlueView"> | number | null
    ConsumoDirecaoVento?: FloatNullableFilter<"DataPlueView"> | number | null
    ConsumoTemperatura?: FloatNullableFilter<"DataPlueView"> | number | null
    ConsumoUmidade?: FloatNullableFilter<"DataPlueView"> | number | null
    stationId?: IntFilter<"DataPlueView"> | number
    station?: XOR<StationScalarRelationFilter, StationWhereInput>
  }

  export type DataPlueViewOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrder
    battery?: SortOrder
    ConsumoPluviometro?: SortOrderInput | SortOrder
    ConsumoVelocidadeVento?: SortOrderInput | SortOrder
    ConsumoDirecaoVento?: SortOrderInput | SortOrder
    ConsumoTemperatura?: SortOrderInput | SortOrder
    ConsumoUmidade?: SortOrderInput | SortOrder
    stationId?: SortOrder
    station?: StationOrderByWithRelationInput
  }

  export type DataPlueViewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DataPlueViewWhereInput | DataPlueViewWhereInput[]
    OR?: DataPlueViewWhereInput[]
    NOT?: DataPlueViewWhereInput | DataPlueViewWhereInput[]
    time?: DateTimeFilter<"DataPlueView"> | Date | string
    battery?: IntFilter<"DataPlueView"> | number
    ConsumoPluviometro?: FloatNullableFilter<"DataPlueView"> | number | null
    ConsumoVelocidadeVento?: FloatNullableFilter<"DataPlueView"> | number | null
    ConsumoDirecaoVento?: FloatNullableFilter<"DataPlueView"> | number | null
    ConsumoTemperatura?: FloatNullableFilter<"DataPlueView"> | number | null
    ConsumoUmidade?: FloatNullableFilter<"DataPlueView"> | number | null
    stationId?: IntFilter<"DataPlueView"> | number
    station?: XOR<StationScalarRelationFilter, StationWhereInput>
  }, "id">

  export type DataPlueViewOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    battery?: SortOrder
    ConsumoPluviometro?: SortOrderInput | SortOrder
    ConsumoVelocidadeVento?: SortOrderInput | SortOrder
    ConsumoDirecaoVento?: SortOrderInput | SortOrder
    ConsumoTemperatura?: SortOrderInput | SortOrder
    ConsumoUmidade?: SortOrderInput | SortOrder
    stationId?: SortOrder
    _count?: DataPlueViewCountOrderByAggregateInput
    _avg?: DataPlueViewAvgOrderByAggregateInput
    _max?: DataPlueViewMaxOrderByAggregateInput
    _min?: DataPlueViewMinOrderByAggregateInput
    _sum?: DataPlueViewSumOrderByAggregateInput
  }

  export type DataPlueViewScalarWhereWithAggregatesInput = {
    AND?: DataPlueViewScalarWhereWithAggregatesInput | DataPlueViewScalarWhereWithAggregatesInput[]
    OR?: DataPlueViewScalarWhereWithAggregatesInput[]
    NOT?: DataPlueViewScalarWhereWithAggregatesInput | DataPlueViewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DataPlueView"> | number
    time?: DateTimeWithAggregatesFilter<"DataPlueView"> | Date | string
    battery?: IntWithAggregatesFilter<"DataPlueView"> | number
    ConsumoPluviometro?: FloatNullableWithAggregatesFilter<"DataPlueView"> | number | null
    ConsumoVelocidadeVento?: FloatNullableWithAggregatesFilter<"DataPlueView"> | number | null
    ConsumoDirecaoVento?: FloatNullableWithAggregatesFilter<"DataPlueView"> | number | null
    ConsumoTemperatura?: FloatNullableWithAggregatesFilter<"DataPlueView"> | number | null
    ConsumoUmidade?: FloatNullableWithAggregatesFilter<"DataPlueView"> | number | null
    stationId?: IntWithAggregatesFilter<"DataPlueView"> | number
  }

  export type WeatherDataWhereInput = {
    AND?: WeatherDataWhereInput | WeatherDataWhereInput[]
    OR?: WeatherDataWhereInput[]
    NOT?: WeatherDataWhereInput | WeatherDataWhereInput[]
    id?: IntFilter<"WeatherData"> | number
    umidade?: FloatFilter<"WeatherData"> | number
    temperatura?: FloatFilter<"WeatherData"> | number
    velocidadeVento?: FloatFilter<"WeatherData"> | number
    direcaoVento?: EnumWindDirectionFilter<"WeatherData"> | $Enums.WindDirection
    quantidadeChuva?: FloatFilter<"WeatherData"> | number
    dataMedicao?: DateTimeFilter<"WeatherData"> | Date | string
    stationId?: IntFilter<"WeatherData"> | number
    station?: XOR<StationScalarRelationFilter, StationWhereInput>
  }

  export type WeatherDataOrderByWithRelationInput = {
    id?: SortOrder
    umidade?: SortOrder
    temperatura?: SortOrder
    velocidadeVento?: SortOrder
    direcaoVento?: SortOrder
    quantidadeChuva?: SortOrder
    dataMedicao?: SortOrder
    stationId?: SortOrder
    station?: StationOrderByWithRelationInput
  }

  export type WeatherDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeatherDataWhereInput | WeatherDataWhereInput[]
    OR?: WeatherDataWhereInput[]
    NOT?: WeatherDataWhereInput | WeatherDataWhereInput[]
    umidade?: FloatFilter<"WeatherData"> | number
    temperatura?: FloatFilter<"WeatherData"> | number
    velocidadeVento?: FloatFilter<"WeatherData"> | number
    direcaoVento?: EnumWindDirectionFilter<"WeatherData"> | $Enums.WindDirection
    quantidadeChuva?: FloatFilter<"WeatherData"> | number
    dataMedicao?: DateTimeFilter<"WeatherData"> | Date | string
    stationId?: IntFilter<"WeatherData"> | number
    station?: XOR<StationScalarRelationFilter, StationWhereInput>
  }, "id">

  export type WeatherDataOrderByWithAggregationInput = {
    id?: SortOrder
    umidade?: SortOrder
    temperatura?: SortOrder
    velocidadeVento?: SortOrder
    direcaoVento?: SortOrder
    quantidadeChuva?: SortOrder
    dataMedicao?: SortOrder
    stationId?: SortOrder
    _count?: WeatherDataCountOrderByAggregateInput
    _avg?: WeatherDataAvgOrderByAggregateInput
    _max?: WeatherDataMaxOrderByAggregateInput
    _min?: WeatherDataMinOrderByAggregateInput
    _sum?: WeatherDataSumOrderByAggregateInput
  }

  export type WeatherDataScalarWhereWithAggregatesInput = {
    AND?: WeatherDataScalarWhereWithAggregatesInput | WeatherDataScalarWhereWithAggregatesInput[]
    OR?: WeatherDataScalarWhereWithAggregatesInput[]
    NOT?: WeatherDataScalarWhereWithAggregatesInput | WeatherDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeatherData"> | number
    umidade?: FloatWithAggregatesFilter<"WeatherData"> | number
    temperatura?: FloatWithAggregatesFilter<"WeatherData"> | number
    velocidadeVento?: FloatWithAggregatesFilter<"WeatherData"> | number
    direcaoVento?: EnumWindDirectionWithAggregatesFilter<"WeatherData"> | $Enums.WindDirection
    quantidadeChuva?: FloatWithAggregatesFilter<"WeatherData"> | number
    dataMedicao?: DateTimeWithAggregatesFilter<"WeatherData"> | Date | string
    stationId?: IntWithAggregatesFilter<"WeatherData"> | number
  }

  export type StationCreateInput = {
    name: string
    macAddress: string
    readings?: DataPlueViewCreateNestedManyWithoutStationInput
    weatherData?: WeatherDataCreateNestedManyWithoutStationInput
  }

  export type StationUncheckedCreateInput = {
    id?: number
    name: string
    macAddress: string
    readings?: DataPlueViewUncheckedCreateNestedManyWithoutStationInput
    weatherData?: WeatherDataUncheckedCreateNestedManyWithoutStationInput
  }

  export type StationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    readings?: DataPlueViewUpdateManyWithoutStationNestedInput
    weatherData?: WeatherDataUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    readings?: DataPlueViewUncheckedUpdateManyWithoutStationNestedInput
    weatherData?: WeatherDataUncheckedUpdateManyWithoutStationNestedInput
  }

  export type StationCreateManyInput = {
    id?: number
    name: string
    macAddress: string
  }

  export type StationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
  }

  export type StationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
  }

  export type DataPlueViewCreateInput = {
    time?: Date | string
    battery: number
    ConsumoPluviometro?: number | null
    ConsumoVelocidadeVento?: number | null
    ConsumoDirecaoVento?: number | null
    ConsumoTemperatura?: number | null
    ConsumoUmidade?: number | null
    station: StationCreateNestedOneWithoutReadingsInput
  }

  export type DataPlueViewUncheckedCreateInput = {
    id?: number
    time?: Date | string
    battery: number
    ConsumoPluviometro?: number | null
    ConsumoVelocidadeVento?: number | null
    ConsumoDirecaoVento?: number | null
    ConsumoTemperatura?: number | null
    ConsumoUmidade?: number | null
    stationId: number
  }

  export type DataPlueViewUpdateInput = {
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    battery?: IntFieldUpdateOperationsInput | number
    ConsumoPluviometro?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoVelocidadeVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoDirecaoVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoTemperatura?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoUmidade?: NullableFloatFieldUpdateOperationsInput | number | null
    station?: StationUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type DataPlueViewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    battery?: IntFieldUpdateOperationsInput | number
    ConsumoPluviometro?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoVelocidadeVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoDirecaoVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoTemperatura?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoUmidade?: NullableFloatFieldUpdateOperationsInput | number | null
    stationId?: IntFieldUpdateOperationsInput | number
  }

  export type DataPlueViewCreateManyInput = {
    id?: number
    time?: Date | string
    battery: number
    ConsumoPluviometro?: number | null
    ConsumoVelocidadeVento?: number | null
    ConsumoDirecaoVento?: number | null
    ConsumoTemperatura?: number | null
    ConsumoUmidade?: number | null
    stationId: number
  }

  export type DataPlueViewUpdateManyMutationInput = {
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    battery?: IntFieldUpdateOperationsInput | number
    ConsumoPluviometro?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoVelocidadeVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoDirecaoVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoTemperatura?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoUmidade?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DataPlueViewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    battery?: IntFieldUpdateOperationsInput | number
    ConsumoPluviometro?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoVelocidadeVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoDirecaoVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoTemperatura?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoUmidade?: NullableFloatFieldUpdateOperationsInput | number | null
    stationId?: IntFieldUpdateOperationsInput | number
  }

  export type WeatherDataCreateInput = {
    umidade: number
    temperatura: number
    velocidadeVento: number
    direcaoVento: $Enums.WindDirection
    quantidadeChuva: number
    dataMedicao?: Date | string
    station: StationCreateNestedOneWithoutWeatherDataInput
  }

  export type WeatherDataUncheckedCreateInput = {
    id?: number
    umidade: number
    temperatura: number
    velocidadeVento: number
    direcaoVento: $Enums.WindDirection
    quantidadeChuva: number
    dataMedicao?: Date | string
    stationId: number
  }

  export type WeatherDataUpdateInput = {
    umidade?: FloatFieldUpdateOperationsInput | number
    temperatura?: FloatFieldUpdateOperationsInput | number
    velocidadeVento?: FloatFieldUpdateOperationsInput | number
    direcaoVento?: EnumWindDirectionFieldUpdateOperationsInput | $Enums.WindDirection
    quantidadeChuva?: FloatFieldUpdateOperationsInput | number
    dataMedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    station?: StationUpdateOneRequiredWithoutWeatherDataNestedInput
  }

  export type WeatherDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    umidade?: FloatFieldUpdateOperationsInput | number
    temperatura?: FloatFieldUpdateOperationsInput | number
    velocidadeVento?: FloatFieldUpdateOperationsInput | number
    direcaoVento?: EnumWindDirectionFieldUpdateOperationsInput | $Enums.WindDirection
    quantidadeChuva?: FloatFieldUpdateOperationsInput | number
    dataMedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    stationId?: IntFieldUpdateOperationsInput | number
  }

  export type WeatherDataCreateManyInput = {
    id?: number
    umidade: number
    temperatura: number
    velocidadeVento: number
    direcaoVento: $Enums.WindDirection
    quantidadeChuva: number
    dataMedicao?: Date | string
    stationId: number
  }

  export type WeatherDataUpdateManyMutationInput = {
    umidade?: FloatFieldUpdateOperationsInput | number
    temperatura?: FloatFieldUpdateOperationsInput | number
    velocidadeVento?: FloatFieldUpdateOperationsInput | number
    direcaoVento?: EnumWindDirectionFieldUpdateOperationsInput | $Enums.WindDirection
    quantidadeChuva?: FloatFieldUpdateOperationsInput | number
    dataMedicao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    umidade?: FloatFieldUpdateOperationsInput | number
    temperatura?: FloatFieldUpdateOperationsInput | number
    velocidadeVento?: FloatFieldUpdateOperationsInput | number
    direcaoVento?: EnumWindDirectionFieldUpdateOperationsInput | $Enums.WindDirection
    quantidadeChuva?: FloatFieldUpdateOperationsInput | number
    dataMedicao?: DateTimeFieldUpdateOperationsInput | Date | string
    stationId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DataPlueViewListRelationFilter = {
    every?: DataPlueViewWhereInput
    some?: DataPlueViewWhereInput
    none?: DataPlueViewWhereInput
  }

  export type WeatherDataListRelationFilter = {
    every?: WeatherDataWhereInput
    some?: WeatherDataWhereInput
    none?: WeatherDataWhereInput
  }

  export type DataPlueViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeatherDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    macAddress?: SortOrder
  }

  export type StationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    macAddress?: SortOrder
  }

  export type StationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    macAddress?: SortOrder
  }

  export type StationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StationScalarRelationFilter = {
    is?: StationWhereInput
    isNot?: StationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DataPlueViewCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    battery?: SortOrder
    ConsumoPluviometro?: SortOrder
    ConsumoVelocidadeVento?: SortOrder
    ConsumoDirecaoVento?: SortOrder
    ConsumoTemperatura?: SortOrder
    ConsumoUmidade?: SortOrder
    stationId?: SortOrder
  }

  export type DataPlueViewAvgOrderByAggregateInput = {
    id?: SortOrder
    battery?: SortOrder
    ConsumoPluviometro?: SortOrder
    ConsumoVelocidadeVento?: SortOrder
    ConsumoDirecaoVento?: SortOrder
    ConsumoTemperatura?: SortOrder
    ConsumoUmidade?: SortOrder
    stationId?: SortOrder
  }

  export type DataPlueViewMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    battery?: SortOrder
    ConsumoPluviometro?: SortOrder
    ConsumoVelocidadeVento?: SortOrder
    ConsumoDirecaoVento?: SortOrder
    ConsumoTemperatura?: SortOrder
    ConsumoUmidade?: SortOrder
    stationId?: SortOrder
  }

  export type DataPlueViewMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    battery?: SortOrder
    ConsumoPluviometro?: SortOrder
    ConsumoVelocidadeVento?: SortOrder
    ConsumoDirecaoVento?: SortOrder
    ConsumoTemperatura?: SortOrder
    ConsumoUmidade?: SortOrder
    stationId?: SortOrder
  }

  export type DataPlueViewSumOrderByAggregateInput = {
    id?: SortOrder
    battery?: SortOrder
    ConsumoPluviometro?: SortOrder
    ConsumoVelocidadeVento?: SortOrder
    ConsumoDirecaoVento?: SortOrder
    ConsumoTemperatura?: SortOrder
    ConsumoUmidade?: SortOrder
    stationId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumWindDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.WindDirection | EnumWindDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.WindDirection[] | ListEnumWindDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.WindDirection[] | ListEnumWindDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumWindDirectionFilter<$PrismaModel> | $Enums.WindDirection
  }

  export type WeatherDataCountOrderByAggregateInput = {
    id?: SortOrder
    umidade?: SortOrder
    temperatura?: SortOrder
    velocidadeVento?: SortOrder
    direcaoVento?: SortOrder
    quantidadeChuva?: SortOrder
    dataMedicao?: SortOrder
    stationId?: SortOrder
  }

  export type WeatherDataAvgOrderByAggregateInput = {
    id?: SortOrder
    umidade?: SortOrder
    temperatura?: SortOrder
    velocidadeVento?: SortOrder
    quantidadeChuva?: SortOrder
    stationId?: SortOrder
  }

  export type WeatherDataMaxOrderByAggregateInput = {
    id?: SortOrder
    umidade?: SortOrder
    temperatura?: SortOrder
    velocidadeVento?: SortOrder
    direcaoVento?: SortOrder
    quantidadeChuva?: SortOrder
    dataMedicao?: SortOrder
    stationId?: SortOrder
  }

  export type WeatherDataMinOrderByAggregateInput = {
    id?: SortOrder
    umidade?: SortOrder
    temperatura?: SortOrder
    velocidadeVento?: SortOrder
    direcaoVento?: SortOrder
    quantidadeChuva?: SortOrder
    dataMedicao?: SortOrder
    stationId?: SortOrder
  }

  export type WeatherDataSumOrderByAggregateInput = {
    id?: SortOrder
    umidade?: SortOrder
    temperatura?: SortOrder
    velocidadeVento?: SortOrder
    quantidadeChuva?: SortOrder
    stationId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumWindDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WindDirection | EnumWindDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.WindDirection[] | ListEnumWindDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.WindDirection[] | ListEnumWindDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumWindDirectionWithAggregatesFilter<$PrismaModel> | $Enums.WindDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWindDirectionFilter<$PrismaModel>
    _max?: NestedEnumWindDirectionFilter<$PrismaModel>
  }

  export type DataPlueViewCreateNestedManyWithoutStationInput = {
    create?: XOR<DataPlueViewCreateWithoutStationInput, DataPlueViewUncheckedCreateWithoutStationInput> | DataPlueViewCreateWithoutStationInput[] | DataPlueViewUncheckedCreateWithoutStationInput[]
    connectOrCreate?: DataPlueViewCreateOrConnectWithoutStationInput | DataPlueViewCreateOrConnectWithoutStationInput[]
    createMany?: DataPlueViewCreateManyStationInputEnvelope
    connect?: DataPlueViewWhereUniqueInput | DataPlueViewWhereUniqueInput[]
  }

  export type WeatherDataCreateNestedManyWithoutStationInput = {
    create?: XOR<WeatherDataCreateWithoutStationInput, WeatherDataUncheckedCreateWithoutStationInput> | WeatherDataCreateWithoutStationInput[] | WeatherDataUncheckedCreateWithoutStationInput[]
    connectOrCreate?: WeatherDataCreateOrConnectWithoutStationInput | WeatherDataCreateOrConnectWithoutStationInput[]
    createMany?: WeatherDataCreateManyStationInputEnvelope
    connect?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
  }

  export type DataPlueViewUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<DataPlueViewCreateWithoutStationInput, DataPlueViewUncheckedCreateWithoutStationInput> | DataPlueViewCreateWithoutStationInput[] | DataPlueViewUncheckedCreateWithoutStationInput[]
    connectOrCreate?: DataPlueViewCreateOrConnectWithoutStationInput | DataPlueViewCreateOrConnectWithoutStationInput[]
    createMany?: DataPlueViewCreateManyStationInputEnvelope
    connect?: DataPlueViewWhereUniqueInput | DataPlueViewWhereUniqueInput[]
  }

  export type WeatherDataUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<WeatherDataCreateWithoutStationInput, WeatherDataUncheckedCreateWithoutStationInput> | WeatherDataCreateWithoutStationInput[] | WeatherDataUncheckedCreateWithoutStationInput[]
    connectOrCreate?: WeatherDataCreateOrConnectWithoutStationInput | WeatherDataCreateOrConnectWithoutStationInput[]
    createMany?: WeatherDataCreateManyStationInputEnvelope
    connect?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DataPlueViewUpdateManyWithoutStationNestedInput = {
    create?: XOR<DataPlueViewCreateWithoutStationInput, DataPlueViewUncheckedCreateWithoutStationInput> | DataPlueViewCreateWithoutStationInput[] | DataPlueViewUncheckedCreateWithoutStationInput[]
    connectOrCreate?: DataPlueViewCreateOrConnectWithoutStationInput | DataPlueViewCreateOrConnectWithoutStationInput[]
    upsert?: DataPlueViewUpsertWithWhereUniqueWithoutStationInput | DataPlueViewUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: DataPlueViewCreateManyStationInputEnvelope
    set?: DataPlueViewWhereUniqueInput | DataPlueViewWhereUniqueInput[]
    disconnect?: DataPlueViewWhereUniqueInput | DataPlueViewWhereUniqueInput[]
    delete?: DataPlueViewWhereUniqueInput | DataPlueViewWhereUniqueInput[]
    connect?: DataPlueViewWhereUniqueInput | DataPlueViewWhereUniqueInput[]
    update?: DataPlueViewUpdateWithWhereUniqueWithoutStationInput | DataPlueViewUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: DataPlueViewUpdateManyWithWhereWithoutStationInput | DataPlueViewUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: DataPlueViewScalarWhereInput | DataPlueViewScalarWhereInput[]
  }

  export type WeatherDataUpdateManyWithoutStationNestedInput = {
    create?: XOR<WeatherDataCreateWithoutStationInput, WeatherDataUncheckedCreateWithoutStationInput> | WeatherDataCreateWithoutStationInput[] | WeatherDataUncheckedCreateWithoutStationInput[]
    connectOrCreate?: WeatherDataCreateOrConnectWithoutStationInput | WeatherDataCreateOrConnectWithoutStationInput[]
    upsert?: WeatherDataUpsertWithWhereUniqueWithoutStationInput | WeatherDataUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: WeatherDataCreateManyStationInputEnvelope
    set?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    disconnect?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    delete?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    connect?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    update?: WeatherDataUpdateWithWhereUniqueWithoutStationInput | WeatherDataUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: WeatherDataUpdateManyWithWhereWithoutStationInput | WeatherDataUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: WeatherDataScalarWhereInput | WeatherDataScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DataPlueViewUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<DataPlueViewCreateWithoutStationInput, DataPlueViewUncheckedCreateWithoutStationInput> | DataPlueViewCreateWithoutStationInput[] | DataPlueViewUncheckedCreateWithoutStationInput[]
    connectOrCreate?: DataPlueViewCreateOrConnectWithoutStationInput | DataPlueViewCreateOrConnectWithoutStationInput[]
    upsert?: DataPlueViewUpsertWithWhereUniqueWithoutStationInput | DataPlueViewUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: DataPlueViewCreateManyStationInputEnvelope
    set?: DataPlueViewWhereUniqueInput | DataPlueViewWhereUniqueInput[]
    disconnect?: DataPlueViewWhereUniqueInput | DataPlueViewWhereUniqueInput[]
    delete?: DataPlueViewWhereUniqueInput | DataPlueViewWhereUniqueInput[]
    connect?: DataPlueViewWhereUniqueInput | DataPlueViewWhereUniqueInput[]
    update?: DataPlueViewUpdateWithWhereUniqueWithoutStationInput | DataPlueViewUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: DataPlueViewUpdateManyWithWhereWithoutStationInput | DataPlueViewUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: DataPlueViewScalarWhereInput | DataPlueViewScalarWhereInput[]
  }

  export type WeatherDataUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<WeatherDataCreateWithoutStationInput, WeatherDataUncheckedCreateWithoutStationInput> | WeatherDataCreateWithoutStationInput[] | WeatherDataUncheckedCreateWithoutStationInput[]
    connectOrCreate?: WeatherDataCreateOrConnectWithoutStationInput | WeatherDataCreateOrConnectWithoutStationInput[]
    upsert?: WeatherDataUpsertWithWhereUniqueWithoutStationInput | WeatherDataUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: WeatherDataCreateManyStationInputEnvelope
    set?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    disconnect?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    delete?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    connect?: WeatherDataWhereUniqueInput | WeatherDataWhereUniqueInput[]
    update?: WeatherDataUpdateWithWhereUniqueWithoutStationInput | WeatherDataUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: WeatherDataUpdateManyWithWhereWithoutStationInput | WeatherDataUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: WeatherDataScalarWhereInput | WeatherDataScalarWhereInput[]
  }

  export type StationCreateNestedOneWithoutReadingsInput = {
    create?: XOR<StationCreateWithoutReadingsInput, StationUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: StationCreateOrConnectWithoutReadingsInput
    connect?: StationWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StationUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<StationCreateWithoutReadingsInput, StationUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: StationCreateOrConnectWithoutReadingsInput
    upsert?: StationUpsertWithoutReadingsInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutReadingsInput, StationUpdateWithoutReadingsInput>, StationUncheckedUpdateWithoutReadingsInput>
  }

  export type StationCreateNestedOneWithoutWeatherDataInput = {
    create?: XOR<StationCreateWithoutWeatherDataInput, StationUncheckedCreateWithoutWeatherDataInput>
    connectOrCreate?: StationCreateOrConnectWithoutWeatherDataInput
    connect?: StationWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWindDirectionFieldUpdateOperationsInput = {
    set?: $Enums.WindDirection
  }

  export type StationUpdateOneRequiredWithoutWeatherDataNestedInput = {
    create?: XOR<StationCreateWithoutWeatherDataInput, StationUncheckedCreateWithoutWeatherDataInput>
    connectOrCreate?: StationCreateOrConnectWithoutWeatherDataInput
    upsert?: StationUpsertWithoutWeatherDataInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutWeatherDataInput, StationUpdateWithoutWeatherDataInput>, StationUncheckedUpdateWithoutWeatherDataInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumWindDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.WindDirection | EnumWindDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.WindDirection[] | ListEnumWindDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.WindDirection[] | ListEnumWindDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumWindDirectionFilter<$PrismaModel> | $Enums.WindDirection
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumWindDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WindDirection | EnumWindDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.WindDirection[] | ListEnumWindDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.WindDirection[] | ListEnumWindDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumWindDirectionWithAggregatesFilter<$PrismaModel> | $Enums.WindDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWindDirectionFilter<$PrismaModel>
    _max?: NestedEnumWindDirectionFilter<$PrismaModel>
  }

  export type DataPlueViewCreateWithoutStationInput = {
    time?: Date | string
    battery: number
    ConsumoPluviometro?: number | null
    ConsumoVelocidadeVento?: number | null
    ConsumoDirecaoVento?: number | null
    ConsumoTemperatura?: number | null
    ConsumoUmidade?: number | null
  }

  export type DataPlueViewUncheckedCreateWithoutStationInput = {
    id?: number
    time?: Date | string
    battery: number
    ConsumoPluviometro?: number | null
    ConsumoVelocidadeVento?: number | null
    ConsumoDirecaoVento?: number | null
    ConsumoTemperatura?: number | null
    ConsumoUmidade?: number | null
  }

  export type DataPlueViewCreateOrConnectWithoutStationInput = {
    where: DataPlueViewWhereUniqueInput
    create: XOR<DataPlueViewCreateWithoutStationInput, DataPlueViewUncheckedCreateWithoutStationInput>
  }

  export type DataPlueViewCreateManyStationInputEnvelope = {
    data: DataPlueViewCreateManyStationInput | DataPlueViewCreateManyStationInput[]
    skipDuplicates?: boolean
  }

  export type WeatherDataCreateWithoutStationInput = {
    umidade: number
    temperatura: number
    velocidadeVento: number
    direcaoVento: $Enums.WindDirection
    quantidadeChuva: number
    dataMedicao?: Date | string
  }

  export type WeatherDataUncheckedCreateWithoutStationInput = {
    id?: number
    umidade: number
    temperatura: number
    velocidadeVento: number
    direcaoVento: $Enums.WindDirection
    quantidadeChuva: number
    dataMedicao?: Date | string
  }

  export type WeatherDataCreateOrConnectWithoutStationInput = {
    where: WeatherDataWhereUniqueInput
    create: XOR<WeatherDataCreateWithoutStationInput, WeatherDataUncheckedCreateWithoutStationInput>
  }

  export type WeatherDataCreateManyStationInputEnvelope = {
    data: WeatherDataCreateManyStationInput | WeatherDataCreateManyStationInput[]
    skipDuplicates?: boolean
  }

  export type DataPlueViewUpsertWithWhereUniqueWithoutStationInput = {
    where: DataPlueViewWhereUniqueInput
    update: XOR<DataPlueViewUpdateWithoutStationInput, DataPlueViewUncheckedUpdateWithoutStationInput>
    create: XOR<DataPlueViewCreateWithoutStationInput, DataPlueViewUncheckedCreateWithoutStationInput>
  }

  export type DataPlueViewUpdateWithWhereUniqueWithoutStationInput = {
    where: DataPlueViewWhereUniqueInput
    data: XOR<DataPlueViewUpdateWithoutStationInput, DataPlueViewUncheckedUpdateWithoutStationInput>
  }

  export type DataPlueViewUpdateManyWithWhereWithoutStationInput = {
    where: DataPlueViewScalarWhereInput
    data: XOR<DataPlueViewUpdateManyMutationInput, DataPlueViewUncheckedUpdateManyWithoutStationInput>
  }

  export type DataPlueViewScalarWhereInput = {
    AND?: DataPlueViewScalarWhereInput | DataPlueViewScalarWhereInput[]
    OR?: DataPlueViewScalarWhereInput[]
    NOT?: DataPlueViewScalarWhereInput | DataPlueViewScalarWhereInput[]
    id?: IntFilter<"DataPlueView"> | number
    time?: DateTimeFilter<"DataPlueView"> | Date | string
    battery?: IntFilter<"DataPlueView"> | number
    ConsumoPluviometro?: FloatNullableFilter<"DataPlueView"> | number | null
    ConsumoVelocidadeVento?: FloatNullableFilter<"DataPlueView"> | number | null
    ConsumoDirecaoVento?: FloatNullableFilter<"DataPlueView"> | number | null
    ConsumoTemperatura?: FloatNullableFilter<"DataPlueView"> | number | null
    ConsumoUmidade?: FloatNullableFilter<"DataPlueView"> | number | null
    stationId?: IntFilter<"DataPlueView"> | number
  }

  export type WeatherDataUpsertWithWhereUniqueWithoutStationInput = {
    where: WeatherDataWhereUniqueInput
    update: XOR<WeatherDataUpdateWithoutStationInput, WeatherDataUncheckedUpdateWithoutStationInput>
    create: XOR<WeatherDataCreateWithoutStationInput, WeatherDataUncheckedCreateWithoutStationInput>
  }

  export type WeatherDataUpdateWithWhereUniqueWithoutStationInput = {
    where: WeatherDataWhereUniqueInput
    data: XOR<WeatherDataUpdateWithoutStationInput, WeatherDataUncheckedUpdateWithoutStationInput>
  }

  export type WeatherDataUpdateManyWithWhereWithoutStationInput = {
    where: WeatherDataScalarWhereInput
    data: XOR<WeatherDataUpdateManyMutationInput, WeatherDataUncheckedUpdateManyWithoutStationInput>
  }

  export type WeatherDataScalarWhereInput = {
    AND?: WeatherDataScalarWhereInput | WeatherDataScalarWhereInput[]
    OR?: WeatherDataScalarWhereInput[]
    NOT?: WeatherDataScalarWhereInput | WeatherDataScalarWhereInput[]
    id?: IntFilter<"WeatherData"> | number
    umidade?: FloatFilter<"WeatherData"> | number
    temperatura?: FloatFilter<"WeatherData"> | number
    velocidadeVento?: FloatFilter<"WeatherData"> | number
    direcaoVento?: EnumWindDirectionFilter<"WeatherData"> | $Enums.WindDirection
    quantidadeChuva?: FloatFilter<"WeatherData"> | number
    dataMedicao?: DateTimeFilter<"WeatherData"> | Date | string
    stationId?: IntFilter<"WeatherData"> | number
  }

  export type StationCreateWithoutReadingsInput = {
    name: string
    macAddress: string
    weatherData?: WeatherDataCreateNestedManyWithoutStationInput
  }

  export type StationUncheckedCreateWithoutReadingsInput = {
    id?: number
    name: string
    macAddress: string
    weatherData?: WeatherDataUncheckedCreateNestedManyWithoutStationInput
  }

  export type StationCreateOrConnectWithoutReadingsInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutReadingsInput, StationUncheckedCreateWithoutReadingsInput>
  }

  export type StationUpsertWithoutReadingsInput = {
    update: XOR<StationUpdateWithoutReadingsInput, StationUncheckedUpdateWithoutReadingsInput>
    create: XOR<StationCreateWithoutReadingsInput, StationUncheckedCreateWithoutReadingsInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutReadingsInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutReadingsInput, StationUncheckedUpdateWithoutReadingsInput>
  }

  export type StationUpdateWithoutReadingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    weatherData?: WeatherDataUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateWithoutReadingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    weatherData?: WeatherDataUncheckedUpdateManyWithoutStationNestedInput
  }

  export type StationCreateWithoutWeatherDataInput = {
    name: string
    macAddress: string
    readings?: DataPlueViewCreateNestedManyWithoutStationInput
  }

  export type StationUncheckedCreateWithoutWeatherDataInput = {
    id?: number
    name: string
    macAddress: string
    readings?: DataPlueViewUncheckedCreateNestedManyWithoutStationInput
  }

  export type StationCreateOrConnectWithoutWeatherDataInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutWeatherDataInput, StationUncheckedCreateWithoutWeatherDataInput>
  }

  export type StationUpsertWithoutWeatherDataInput = {
    update: XOR<StationUpdateWithoutWeatherDataInput, StationUncheckedUpdateWithoutWeatherDataInput>
    create: XOR<StationCreateWithoutWeatherDataInput, StationUncheckedCreateWithoutWeatherDataInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutWeatherDataInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutWeatherDataInput, StationUncheckedUpdateWithoutWeatherDataInput>
  }

  export type StationUpdateWithoutWeatherDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    readings?: DataPlueViewUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateWithoutWeatherDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    macAddress?: StringFieldUpdateOperationsInput | string
    readings?: DataPlueViewUncheckedUpdateManyWithoutStationNestedInput
  }

  export type DataPlueViewCreateManyStationInput = {
    id?: number
    time?: Date | string
    battery: number
    ConsumoPluviometro?: number | null
    ConsumoVelocidadeVento?: number | null
    ConsumoDirecaoVento?: number | null
    ConsumoTemperatura?: number | null
    ConsumoUmidade?: number | null
  }

  export type WeatherDataCreateManyStationInput = {
    id?: number
    umidade: number
    temperatura: number
    velocidadeVento: number
    direcaoVento: $Enums.WindDirection
    quantidadeChuva: number
    dataMedicao?: Date | string
  }

  export type DataPlueViewUpdateWithoutStationInput = {
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    battery?: IntFieldUpdateOperationsInput | number
    ConsumoPluviometro?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoVelocidadeVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoDirecaoVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoTemperatura?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoUmidade?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DataPlueViewUncheckedUpdateWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    battery?: IntFieldUpdateOperationsInput | number
    ConsumoPluviometro?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoVelocidadeVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoDirecaoVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoTemperatura?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoUmidade?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DataPlueViewUncheckedUpdateManyWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    battery?: IntFieldUpdateOperationsInput | number
    ConsumoPluviometro?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoVelocidadeVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoDirecaoVento?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoTemperatura?: NullableFloatFieldUpdateOperationsInput | number | null
    ConsumoUmidade?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WeatherDataUpdateWithoutStationInput = {
    umidade?: FloatFieldUpdateOperationsInput | number
    temperatura?: FloatFieldUpdateOperationsInput | number
    velocidadeVento?: FloatFieldUpdateOperationsInput | number
    direcaoVento?: EnumWindDirectionFieldUpdateOperationsInput | $Enums.WindDirection
    quantidadeChuva?: FloatFieldUpdateOperationsInput | number
    dataMedicao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherDataUncheckedUpdateWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    umidade?: FloatFieldUpdateOperationsInput | number
    temperatura?: FloatFieldUpdateOperationsInput | number
    velocidadeVento?: FloatFieldUpdateOperationsInput | number
    direcaoVento?: EnumWindDirectionFieldUpdateOperationsInput | $Enums.WindDirection
    quantidadeChuva?: FloatFieldUpdateOperationsInput | number
    dataMedicao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherDataUncheckedUpdateManyWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    umidade?: FloatFieldUpdateOperationsInput | number
    temperatura?: FloatFieldUpdateOperationsInput | number
    velocidadeVento?: FloatFieldUpdateOperationsInput | number
    direcaoVento?: EnumWindDirectionFieldUpdateOperationsInput | $Enums.WindDirection
    quantidadeChuva?: FloatFieldUpdateOperationsInput | number
    dataMedicao?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}