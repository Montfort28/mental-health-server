
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MentalHealthMetric
 * 
 */
export type MentalHealthMetric = $Result.DefaultSelection<Prisma.$MentalHealthMetricPayload>
/**
 * Model ForumCategory
 * 
 */
export type ForumCategory = $Result.DefaultSelection<Prisma.$ForumCategoryPayload>
/**
 * Model ForumPost
 * 
 */
export type ForumPost = $Result.DefaultSelection<Prisma.$ForumPostPayload>
/**
 * Model ForumComment
 * 
 */
export type ForumComment = $Result.DefaultSelection<Prisma.$ForumCommentPayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model UserPreference
 * 
 */
export type UserPreference = $Result.DefaultSelection<Prisma.$UserPreferencePayload>
/**
 * Model GardenElement
 * 
 */
export type GardenElement = $Result.DefaultSelection<Prisma.$GardenElementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GardenElementType: {
    plant: 'plant',
    tree: 'tree',
    flower: 'flower'
  };

  export type GardenElementType = (typeof GardenElementType)[keyof typeof GardenElementType]


  export const HealthStatus: {
    healthy: 'healthy',
    needs_attention: 'needs_attention',
    wilting: 'wilting'
  };

  export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus]

}

export type GardenElementType = $Enums.GardenElementType

export const GardenElementType: typeof $Enums.GardenElementType

export type HealthStatus = $Enums.HealthStatus

export const HealthStatus: typeof $Enums.HealthStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

  /**
     * Executes a prepared raw query and returns the number of affected rows.
     * @example
     * ```
     * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
* `prisma.user`: Exposes CRUD operations for the **User** model.
* Example usage:
* ```ts
* // Fetch zero or more Users
* const users = await prisma.user.findMany()
* ```
*/
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentalHealthMetric`: Exposes CRUD operations for the **MentalHealthMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MentalHealthMetrics
    * const mentalHealthMetrics = await prisma.mentalHealthMetric.findMany()
    * ```
    */
  get mentalHealthMetric(): Prisma.MentalHealthMetricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumCategory`: Exposes CRUD operations for the **ForumCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumCategories
    * const forumCategories = await prisma.forumCategory.findMany()
    * ```
    */
  get forumCategory(): Prisma.ForumCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumPost`: Exposes CRUD operations for the **ForumPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumPosts
    * const forumPosts = await prisma.forumPost.findMany()
    * ```
    */
  get forumPost(): Prisma.ForumPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forumComment`: Exposes CRUD operations for the **ForumComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForumComments
    * const forumComments = await prisma.forumComment.findMany()
    * ```
    */
  get forumComment(): Prisma.ForumCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreference.findMany()
    * ```
    */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gardenElement`: Exposes CRUD operations for the **GardenElement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GardenElements
    * const gardenElements = await prisma.gardenElement.findMany()
    * ```
    */
  get gardenElement(): Prisma.GardenElementDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    | { [P in keyof O as P extends K ? P : never]-?: O[P] } & O
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
    User: 'User',
    MentalHealthMetric: 'MentalHealthMetric',
    ForumCategory: 'ForumCategory',
    ForumPost: 'ForumPost',
    ForumComment: 'ForumComment',
    Resource: 'Resource',
    UserPreference: 'UserPreference',
    GardenElement: 'GardenElement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "mentalHealthMetric" | "forumCategory" | "forumPost" | "forumComment" | "resource" | "userPreference" | "gardenElement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MentalHealthMetric: {
        payload: Prisma.$MentalHealthMetricPayload<ExtArgs>
        fields: Prisma.MentalHealthMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentalHealthMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalHealthMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentalHealthMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalHealthMetricPayload>
          }
          findFirst: {
            args: Prisma.MentalHealthMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalHealthMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentalHealthMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalHealthMetricPayload>
          }
          findMany: {
            args: Prisma.MentalHealthMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalHealthMetricPayload>[]
          }
          create: {
            args: Prisma.MentalHealthMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalHealthMetricPayload>
          }
          createMany: {
            args: Prisma.MentalHealthMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MentalHealthMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalHealthMetricPayload>
          }
          update: {
            args: Prisma.MentalHealthMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalHealthMetricPayload>
          }
          deleteMany: {
            args: Prisma.MentalHealthMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentalHealthMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MentalHealthMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalHealthMetricPayload>
          }
          aggregate: {
            args: Prisma.MentalHealthMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentalHealthMetric>
          }
          groupBy: {
            args: Prisma.MentalHealthMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentalHealthMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentalHealthMetricCountArgs<ExtArgs>
            result: $Utils.Optional<MentalHealthMetricCountAggregateOutputType> | number
          }
        }
      }
      ForumCategory: {
        payload: Prisma.$ForumCategoryPayload<ExtArgs>
        fields: Prisma.ForumCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>
          }
          findFirst: {
            args: Prisma.ForumCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>
          }
          findMany: {
            args: Prisma.ForumCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>[]
          }
          create: {
            args: Prisma.ForumCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>
          }
          createMany: {
            args: Prisma.ForumCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ForumCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>
          }
          update: {
            args: Prisma.ForumCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ForumCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ForumCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCategoryPayload>
          }
          aggregate: {
            args: Prisma.ForumCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumCategory>
          }
          groupBy: {
            args: Prisma.ForumCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ForumCategoryCountAggregateOutputType> | number
          }
        }
      }
      ForumPost: {
        payload: Prisma.$ForumPostPayload<ExtArgs>
        fields: Prisma.ForumPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          findFirst: {
            args: Prisma.ForumPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          findMany: {
            args: Prisma.ForumPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>[]
          }
          create: {
            args: Prisma.ForumPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          createMany: {
            args: Prisma.ForumPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ForumPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          update: {
            args: Prisma.ForumPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          deleteMany: {
            args: Prisma.ForumPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ForumPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPostPayload>
          }
          aggregate: {
            args: Prisma.ForumPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumPost>
          }
          groupBy: {
            args: Prisma.ForumPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumPostCountArgs<ExtArgs>
            result: $Utils.Optional<ForumPostCountAggregateOutputType> | number
          }
        }
      }
      ForumComment: {
        payload: Prisma.$ForumCommentPayload<ExtArgs>
        fields: Prisma.ForumCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          findFirst: {
            args: Prisma.ForumCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          findMany: {
            args: Prisma.ForumCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>[]
          }
          create: {
            args: Prisma.ForumCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          createMany: {
            args: Prisma.ForumCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ForumCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          update: {
            args: Prisma.ForumCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          deleteMany: {
            args: Prisma.ForumCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ForumCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumCommentPayload>
          }
          aggregate: {
            args: Prisma.ForumCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForumComment>
          }
          groupBy: {
            args: Prisma.ForumCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumCommentCountArgs<ExtArgs>
            result: $Utils.Optional<ForumCommentCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>
        fields: Prisma.UserPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreference>
          }
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceCountAggregateOutputType> | number
          }
        }
      }
      GardenElement: {
        payload: Prisma.$GardenElementPayload<ExtArgs>
        fields: Prisma.GardenElementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GardenElementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenElementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GardenElementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenElementPayload>
          }
          findFirst: {
            args: Prisma.GardenElementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenElementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GardenElementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenElementPayload>
          }
          findMany: {
            args: Prisma.GardenElementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenElementPayload>[]
          }
          create: {
            args: Prisma.GardenElementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenElementPayload>
          }
          createMany: {
            args: Prisma.GardenElementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GardenElementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenElementPayload>
          }
          update: {
            args: Prisma.GardenElementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenElementPayload>
          }
          deleteMany: {
            args: Prisma.GardenElementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GardenElementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GardenElementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenElementPayload>
          }
          aggregate: {
            args: Prisma.GardenElementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGardenElement>
          }
          groupBy: {
            args: Prisma.GardenElementGroupByArgs<ExtArgs>
            result: $Utils.Optional<GardenElementGroupByOutputType>[]
          }
          count: {
            args: Prisma.GardenElementCountArgs<ExtArgs>
            result: $Utils.Optional<GardenElementCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    mentalHealthMetric?: MentalHealthMetricOmit
    forumCategory?: ForumCategoryOmit
    forumPost?: ForumPostOmit
    forumComment?: ForumCommentOmit
    resource?: ResourceOmit
    userPreference?: UserPreferenceOmit
    gardenElement?: GardenElementOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    mentalHealthMetrics: number
    forumPosts: number
    forumComments: number
    gardenElements: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentalHealthMetrics?: boolean | UserCountOutputTypeCountMentalHealthMetricsArgs
    forumPosts?: boolean | UserCountOutputTypeCountForumPostsArgs
    forumComments?: boolean | UserCountOutputTypeCountForumCommentsArgs
    gardenElements?: boolean | UserCountOutputTypeCountGardenElementsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMentalHealthMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentalHealthMetricWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountForumPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountForumCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGardenElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GardenElementWhereInput
  }


  /**
   * Count Type ForumCategoryCountOutputType
   */

  export type ForumCategoryCountOutputType = {
    posts: number
  }

  export type ForumCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | ForumCategoryCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * ForumCategoryCountOutputType without action
   */
  export type ForumCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategoryCountOutputType
     */
    select?: ForumCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumCategoryCountOutputType without action
   */
  export type ForumCategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumPostWhereInput
  }


  /**
   * Count Type ForumPostCountOutputType
   */

  export type ForumPostCountOutputType = {
    comments: number
  }

  export type ForumPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ForumPostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ForumPostCountOutputType without action
   */
  export type ForumPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPostCountOutputType
     */
    select?: ForumPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumPostCountOutputType without action
   */
  export type ForumPostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    passwordHash: string | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    passwordHash: string | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    isEmailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateUser[P]>
    : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    passwordHash: string
    isEmailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], UserGroupByOutputType[P]>
        : GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mentalHealthMetrics?: boolean | User$mentalHealthMetricsArgs<ExtArgs>
    forumPosts?: boolean | User$forumPostsArgs<ExtArgs>
    forumComments?: boolean | User$forumCommentsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    gardenElements?: boolean | User$gardenElementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "passwordHash" | "isEmailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentalHealthMetrics?: boolean | User$mentalHealthMetricsArgs<ExtArgs>
    forumPosts?: boolean | User$forumPostsArgs<ExtArgs>
    forumComments?: boolean | User$forumCommentsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    gardenElements?: boolean | User$gardenElementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      mentalHealthMetrics: Prisma.$MentalHealthMetricPayload<ExtArgs>[]
      forumPosts: Prisma.$ForumPostPayload<ExtArgs>[]
      forumComments: Prisma.$ForumCommentPayload<ExtArgs>[]
      preferences: Prisma.$UserPreferencePayload<ExtArgs> | null
      gardenElements: Prisma.$GardenElementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      passwordHash: string
      isEmailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
      ? T['select'] extends true
      ? number
      : GetScalarType<T['select'], UserCountAggregateOutputType>
      : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: UserGroupByArgs['orderBy'] }
      : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentalHealthMetrics<T extends User$mentalHealthMetricsArgs<ExtArgs> = {}>(args?: Subset<T, User$mentalHealthMetricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentalHealthMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forumPosts<T extends User$forumPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$forumPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forumComments<T extends User$forumCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$forumCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gardenElements<T extends User$gardenElementsArgs<ExtArgs> = {}>(args?: Subset<T, User$gardenElementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GardenElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.mentalHealthMetrics
   */
  export type User$mentalHealthMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalHealthMetric
     */
    select?: MentalHealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalHealthMetric
     */
    omit?: MentalHealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalHealthMetricInclude<ExtArgs> | null
    where?: MentalHealthMetricWhereInput
    orderBy?: MentalHealthMetricOrderByWithRelationInput | MentalHealthMetricOrderByWithRelationInput[]
    cursor?: MentalHealthMetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MentalHealthMetricScalarFieldEnum | MentalHealthMetricScalarFieldEnum[]
  }

  /**
   * User.forumPosts
   */
  export type User$forumPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    where?: ForumPostWhereInput
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    cursor?: ForumPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * User.forumComments
   */
  export type User$forumCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    cursor?: ForumCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    where?: UserPreferenceWhereInput
  }

  /**
   * User.gardenElements
   */
  export type User$gardenElementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GardenElement
     */
    select?: GardenElementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GardenElement
     */
    omit?: GardenElementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenElementInclude<ExtArgs> | null
    where?: GardenElementWhereInput
    orderBy?: GardenElementOrderByWithRelationInput | GardenElementOrderByWithRelationInput[]
    cursor?: GardenElementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GardenElementScalarFieldEnum | GardenElementScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MentalHealthMetric
   */

  export type AggregateMentalHealthMetric = {
    _count: MentalHealthMetricCountAggregateOutputType | null
    _avg: MentalHealthMetricAvgAggregateOutputType | null
    _sum: MentalHealthMetricSumAggregateOutputType | null
    _min: MentalHealthMetricMinAggregateOutputType | null
    _max: MentalHealthMetricMaxAggregateOutputType | null
  }

  export type MentalHealthMetricAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    mood: number | null
    anxietyLevel: number | null
    stressLevel: number | null
  }

  export type MentalHealthMetricSumAggregateOutputType = {
    id: number | null
    userId: number | null
    mood: number | null
    anxietyLevel: number | null
    stressLevel: number | null
  }

  export type MentalHealthMetricMinAggregateOutputType = {
    id: number | null
    userId: number | null
    metricDate: Date | null
    mood: number | null
    anxietyLevel: number | null
    stressLevel: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type MentalHealthMetricMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    metricDate: Date | null
    mood: number | null
    anxietyLevel: number | null
    stressLevel: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type MentalHealthMetricCountAggregateOutputType = {
    id: number
    userId: number
    metricDate: number
    mood: number
    anxietyLevel: number
    stressLevel: number
    notes: number
    activities: number
    createdAt: number
    _all: number
  }


  export type MentalHealthMetricAvgAggregateInputType = {
    id?: true
    userId?: true
    mood?: true
    anxietyLevel?: true
    stressLevel?: true
  }

  export type MentalHealthMetricSumAggregateInputType = {
    id?: true
    userId?: true
    mood?: true
    anxietyLevel?: true
    stressLevel?: true
  }

  export type MentalHealthMetricMinAggregateInputType = {
    id?: true
    userId?: true
    metricDate?: true
    mood?: true
    anxietyLevel?: true
    stressLevel?: true
    notes?: true
    createdAt?: true
  }

  export type MentalHealthMetricMaxAggregateInputType = {
    id?: true
    userId?: true
    metricDate?: true
    mood?: true
    anxietyLevel?: true
    stressLevel?: true
    notes?: true
    createdAt?: true
  }

  export type MentalHealthMetricCountAggregateInputType = {
    id?: true
    userId?: true
    metricDate?: true
    mood?: true
    anxietyLevel?: true
    stressLevel?: true
    notes?: true
    activities?: true
    createdAt?: true
    _all?: true
  }

  export type MentalHealthMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentalHealthMetric to aggregate.
     */
    where?: MentalHealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentalHealthMetrics to fetch.
     */
    orderBy?: MentalHealthMetricOrderByWithRelationInput | MentalHealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentalHealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentalHealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentalHealthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MentalHealthMetrics
    **/
    _count?: true | MentalHealthMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentalHealthMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentalHealthMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentalHealthMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentalHealthMetricMaxAggregateInputType
  }

  export type GetMentalHealthMetricAggregateType<T extends MentalHealthMetricAggregateArgs> = {
    [P in keyof T & keyof AggregateMentalHealthMetric]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateMentalHealthMetric[P]>
    : GetScalarType<T[P], AggregateMentalHealthMetric[P]>
  }




  export type MentalHealthMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentalHealthMetricWhereInput
    orderBy?: MentalHealthMetricOrderByWithAggregationInput | MentalHealthMetricOrderByWithAggregationInput[]
    by: MentalHealthMetricScalarFieldEnum[] | MentalHealthMetricScalarFieldEnum
    having?: MentalHealthMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentalHealthMetricCountAggregateInputType | true
    _avg?: MentalHealthMetricAvgAggregateInputType
    _sum?: MentalHealthMetricSumAggregateInputType
    _min?: MentalHealthMetricMinAggregateInputType
    _max?: MentalHealthMetricMaxAggregateInputType
  }

  export type MentalHealthMetricGroupByOutputType = {
    id: number
    userId: number
    metricDate: Date
    mood: number
    anxietyLevel: number | null
    stressLevel: number | null
    notes: string | null
    activities: JsonValue | null
    createdAt: Date
    _count: MentalHealthMetricCountAggregateOutputType | null
    _avg: MentalHealthMetricAvgAggregateOutputType | null
    _sum: MentalHealthMetricSumAggregateOutputType | null
    _min: MentalHealthMetricMinAggregateOutputType | null
    _max: MentalHealthMetricMaxAggregateOutputType | null
  }

  type GetMentalHealthMetricGroupByPayload<T extends MentalHealthMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentalHealthMetricGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof MentalHealthMetricGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], MentalHealthMetricGroupByOutputType[P]>
        : GetScalarType<T[P], MentalHealthMetricGroupByOutputType[P]>
      }
    >
  >


  export type MentalHealthMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    metricDate?: boolean
    mood?: boolean
    anxietyLevel?: boolean
    stressLevel?: boolean
    notes?: boolean
    activities?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentalHealthMetric"]>



  export type MentalHealthMetricSelectScalar = {
    id?: boolean
    userId?: boolean
    metricDate?: boolean
    mood?: boolean
    anxietyLevel?: boolean
    stressLevel?: boolean
    notes?: boolean
    activities?: boolean
    createdAt?: boolean
  }

  export type MentalHealthMetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "metricDate" | "mood" | "anxietyLevel" | "stressLevel" | "notes" | "activities" | "createdAt", ExtArgs["result"]["mentalHealthMetric"]>
  export type MentalHealthMetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MentalHealthMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MentalHealthMetric"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      metricDate: Date
      mood: number
      anxietyLevel: number | null
      stressLevel: number | null
      notes: string | null
      activities: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["mentalHealthMetric"]>
    composites: {}
  }

  type MentalHealthMetricGetPayload<S extends boolean | null | undefined | MentalHealthMetricDefaultArgs> = $Result.GetResult<Prisma.$MentalHealthMetricPayload, S>

  type MentalHealthMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentalHealthMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentalHealthMetricCountAggregateInputType | true
    }

  export interface MentalHealthMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MentalHealthMetric'], meta: { name: 'MentalHealthMetric' } }
    /**
     * Find zero or one MentalHealthMetric that matches the filter.
     * @param {MentalHealthMetricFindUniqueArgs} args - Arguments to find a MentalHealthMetric
     * @example
     * // Get one MentalHealthMetric
     * const mentalHealthMetric = await prisma.mentalHealthMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentalHealthMetricFindUniqueArgs>(args: SelectSubset<T, MentalHealthMetricFindUniqueArgs<ExtArgs>>): Prisma__MentalHealthMetricClient<$Result.GetResult<Prisma.$MentalHealthMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MentalHealthMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentalHealthMetricFindUniqueOrThrowArgs} args - Arguments to find a MentalHealthMetric
     * @example
     * // Get one MentalHealthMetric
     * const mentalHealthMetric = await prisma.mentalHealthMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentalHealthMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MentalHealthMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentalHealthMetricClient<$Result.GetResult<Prisma.$MentalHealthMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentalHealthMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalHealthMetricFindFirstArgs} args - Arguments to find a MentalHealthMetric
     * @example
     * // Get one MentalHealthMetric
     * const mentalHealthMetric = await prisma.mentalHealthMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentalHealthMetricFindFirstArgs>(args?: SelectSubset<T, MentalHealthMetricFindFirstArgs<ExtArgs>>): Prisma__MentalHealthMetricClient<$Result.GetResult<Prisma.$MentalHealthMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentalHealthMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalHealthMetricFindFirstOrThrowArgs} args - Arguments to find a MentalHealthMetric
     * @example
     * // Get one MentalHealthMetric
     * const mentalHealthMetric = await prisma.mentalHealthMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentalHealthMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MentalHealthMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentalHealthMetricClient<$Result.GetResult<Prisma.$MentalHealthMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MentalHealthMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalHealthMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MentalHealthMetrics
     * const mentalHealthMetrics = await prisma.mentalHealthMetric.findMany()
     * 
     * // Get first 10 MentalHealthMetrics
     * const mentalHealthMetrics = await prisma.mentalHealthMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentalHealthMetricWithIdOnly = await prisma.mentalHealthMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentalHealthMetricFindManyArgs>(args?: SelectSubset<T, MentalHealthMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentalHealthMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MentalHealthMetric.
     * @param {MentalHealthMetricCreateArgs} args - Arguments to create a MentalHealthMetric.
     * @example
     * // Create one MentalHealthMetric
     * const MentalHealthMetric = await prisma.mentalHealthMetric.create({
     *   data: {
     *     // ... data to create a MentalHealthMetric
     *   }
     * })
     * 
     */
    create<T extends MentalHealthMetricCreateArgs>(args: SelectSubset<T, MentalHealthMetricCreateArgs<ExtArgs>>): Prisma__MentalHealthMetricClient<$Result.GetResult<Prisma.$MentalHealthMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MentalHealthMetrics.
     * @param {MentalHealthMetricCreateManyArgs} args - Arguments to create many MentalHealthMetrics.
     * @example
     * // Create many MentalHealthMetrics
     * const mentalHealthMetric = await prisma.mentalHealthMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentalHealthMetricCreateManyArgs>(args?: SelectSubset<T, MentalHealthMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MentalHealthMetric.
     * @param {MentalHealthMetricDeleteArgs} args - Arguments to delete one MentalHealthMetric.
     * @example
     * // Delete one MentalHealthMetric
     * const MentalHealthMetric = await prisma.mentalHealthMetric.delete({
     *   where: {
     *     // ... filter to delete one MentalHealthMetric
     *   }
     * })
     * 
     */
    delete<T extends MentalHealthMetricDeleteArgs>(args: SelectSubset<T, MentalHealthMetricDeleteArgs<ExtArgs>>): Prisma__MentalHealthMetricClient<$Result.GetResult<Prisma.$MentalHealthMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MentalHealthMetric.
     * @param {MentalHealthMetricUpdateArgs} args - Arguments to update one MentalHealthMetric.
     * @example
     * // Update one MentalHealthMetric
     * const mentalHealthMetric = await prisma.mentalHealthMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentalHealthMetricUpdateArgs>(args: SelectSubset<T, MentalHealthMetricUpdateArgs<ExtArgs>>): Prisma__MentalHealthMetricClient<$Result.GetResult<Prisma.$MentalHealthMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MentalHealthMetrics.
     * @param {MentalHealthMetricDeleteManyArgs} args - Arguments to filter MentalHealthMetrics to delete.
     * @example
     * // Delete a few MentalHealthMetrics
     * const { count } = await prisma.mentalHealthMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentalHealthMetricDeleteManyArgs>(args?: SelectSubset<T, MentalHealthMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentalHealthMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalHealthMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MentalHealthMetrics
     * const mentalHealthMetric = await prisma.mentalHealthMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentalHealthMetricUpdateManyArgs>(args: SelectSubset<T, MentalHealthMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MentalHealthMetric.
     * @param {MentalHealthMetricUpsertArgs} args - Arguments to update or create a MentalHealthMetric.
     * @example
     * // Update or create a MentalHealthMetric
     * const mentalHealthMetric = await prisma.mentalHealthMetric.upsert({
     *   create: {
     *     // ... data to create a MentalHealthMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MentalHealthMetric we want to update
     *   }
     * })
     */
    upsert<T extends MentalHealthMetricUpsertArgs>(args: SelectSubset<T, MentalHealthMetricUpsertArgs<ExtArgs>>): Prisma__MentalHealthMetricClient<$Result.GetResult<Prisma.$MentalHealthMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MentalHealthMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalHealthMetricCountArgs} args - Arguments to filter MentalHealthMetrics to count.
     * @example
     * // Count the number of MentalHealthMetrics
     * const count = await prisma.mentalHealthMetric.count({
     *   where: {
     *     // ... the filter for the MentalHealthMetrics we want to count
     *   }
     * })
    **/
    count<T extends MentalHealthMetricCountArgs>(
      args?: Subset<T, MentalHealthMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
      ? T['select'] extends true
      ? number
      : GetScalarType<T['select'], MentalHealthMetricCountAggregateOutputType>
      : number
    >

    /**
     * Allows you to perform aggregations operations on a MentalHealthMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalHealthMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MentalHealthMetricAggregateArgs>(args: Subset<T, MentalHealthMetricAggregateArgs>): Prisma.PrismaPromise<GetMentalHealthMetricAggregateType<T>>

    /**
     * Group by MentalHealthMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalHealthMetricGroupByArgs} args - Group by arguments.
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
      T extends MentalHealthMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: MentalHealthMetricGroupByArgs['orderBy'] }
      : { orderBy?: MentalHealthMetricGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MentalHealthMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentalHealthMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the MentalHealthMetric model
     */
    readonly fields: MentalHealthMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MentalHealthMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentalHealthMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MentalHealthMetric model
   */
  interface MentalHealthMetricFieldRefs {
    readonly id: FieldRef<"MentalHealthMetric", 'Int'>
    readonly userId: FieldRef<"MentalHealthMetric", 'Int'>
    readonly metricDate: FieldRef<"MentalHealthMetric", 'DateTime'>
    readonly mood: FieldRef<"MentalHealthMetric", 'Int'>
    readonly anxietyLevel: FieldRef<"MentalHealthMetric", 'Int'>
    readonly stressLevel: FieldRef<"MentalHealthMetric", 'Int'>
    readonly notes: FieldRef<"MentalHealthMetric", 'String'>
    readonly activities: FieldRef<"MentalHealthMetric", 'Json'>
    readonly createdAt: FieldRef<"MentalHealthMetric", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * MentalHealthMetric findUnique
   */
  export type MentalHealthMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalHealthMetric
     */
    select?: MentalHealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalHealthMetric
     */
    omit?: MentalHealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalHealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which MentalHealthMetric to fetch.
     */
    where: MentalHealthMetricWhereUniqueInput
  }

  /**
   * MentalHealthMetric findUniqueOrThrow
   */
  export type MentalHealthMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalHealthMetric
     */
    select?: MentalHealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalHealthMetric
     */
    omit?: MentalHealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalHealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which MentalHealthMetric to fetch.
     */
    where: MentalHealthMetricWhereUniqueInput
  }

  /**
   * MentalHealthMetric findFirst
   */
  export type MentalHealthMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalHealthMetric
     */
    select?: MentalHealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalHealthMetric
     */
    omit?: MentalHealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalHealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which MentalHealthMetric to fetch.
     */
    where?: MentalHealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentalHealthMetrics to fetch.
     */
    orderBy?: MentalHealthMetricOrderByWithRelationInput | MentalHealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentalHealthMetrics.
     */
    cursor?: MentalHealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentalHealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentalHealthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentalHealthMetrics.
     */
    distinct?: MentalHealthMetricScalarFieldEnum | MentalHealthMetricScalarFieldEnum[]
  }

  /**
   * MentalHealthMetric findFirstOrThrow
   */
  export type MentalHealthMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalHealthMetric
     */
    select?: MentalHealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalHealthMetric
     */
    omit?: MentalHealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalHealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which MentalHealthMetric to fetch.
     */
    where?: MentalHealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentalHealthMetrics to fetch.
     */
    orderBy?: MentalHealthMetricOrderByWithRelationInput | MentalHealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentalHealthMetrics.
     */
    cursor?: MentalHealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentalHealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentalHealthMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentalHealthMetrics.
     */
    distinct?: MentalHealthMetricScalarFieldEnum | MentalHealthMetricScalarFieldEnum[]
  }

  /**
   * MentalHealthMetric findMany
   */
  export type MentalHealthMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalHealthMetric
     */
    select?: MentalHealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalHealthMetric
     */
    omit?: MentalHealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalHealthMetricInclude<ExtArgs> | null
    /**
     * Filter, which MentalHealthMetrics to fetch.
     */
    where?: MentalHealthMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentalHealthMetrics to fetch.
     */
    orderBy?: MentalHealthMetricOrderByWithRelationInput | MentalHealthMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MentalHealthMetrics.
     */
    cursor?: MentalHealthMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentalHealthMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentalHealthMetrics.
     */
    skip?: number
    distinct?: MentalHealthMetricScalarFieldEnum | MentalHealthMetricScalarFieldEnum[]
  }

  /**
   * MentalHealthMetric create
   */
  export type MentalHealthMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalHealthMetric
     */
    select?: MentalHealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalHealthMetric
     */
    omit?: MentalHealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalHealthMetricInclude<ExtArgs> | null
    /**
     * The data needed to create a MentalHealthMetric.
     */
    data: XOR<MentalHealthMetricCreateInput, MentalHealthMetricUncheckedCreateInput>
  }

  /**
   * MentalHealthMetric createMany
   */
  export type MentalHealthMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MentalHealthMetrics.
     */
    data: MentalHealthMetricCreateManyInput | MentalHealthMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MentalHealthMetric update
   */
  export type MentalHealthMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalHealthMetric
     */
    select?: MentalHealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalHealthMetric
     */
    omit?: MentalHealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalHealthMetricInclude<ExtArgs> | null
    /**
     * The data needed to update a MentalHealthMetric.
     */
    data: XOR<MentalHealthMetricUpdateInput, MentalHealthMetricUncheckedUpdateInput>
    /**
     * Choose, which MentalHealthMetric to update.
     */
    where: MentalHealthMetricWhereUniqueInput
  }

  /**
   * MentalHealthMetric updateMany
   */
  export type MentalHealthMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MentalHealthMetrics.
     */
    data: XOR<MentalHealthMetricUpdateManyMutationInput, MentalHealthMetricUncheckedUpdateManyInput>
    /**
     * Filter which MentalHealthMetrics to update
     */
    where?: MentalHealthMetricWhereInput
    /**
     * Limit how many MentalHealthMetrics to update.
     */
    limit?: number
  }

  /**
   * MentalHealthMetric upsert
   */
  export type MentalHealthMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalHealthMetric
     */
    select?: MentalHealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalHealthMetric
     */
    omit?: MentalHealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalHealthMetricInclude<ExtArgs> | null
    /**
     * The filter to search for the MentalHealthMetric to update in case it exists.
     */
    where: MentalHealthMetricWhereUniqueInput
    /**
     * In case the MentalHealthMetric found by the `where` argument doesn't exist, create a new MentalHealthMetric with this data.
     */
    create: XOR<MentalHealthMetricCreateInput, MentalHealthMetricUncheckedCreateInput>
    /**
     * In case the MentalHealthMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentalHealthMetricUpdateInput, MentalHealthMetricUncheckedUpdateInput>
  }

  /**
   * MentalHealthMetric delete
   */
  export type MentalHealthMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalHealthMetric
     */
    select?: MentalHealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalHealthMetric
     */
    omit?: MentalHealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalHealthMetricInclude<ExtArgs> | null
    /**
     * Filter which MentalHealthMetric to delete.
     */
    where: MentalHealthMetricWhereUniqueInput
  }

  /**
   * MentalHealthMetric deleteMany
   */
  export type MentalHealthMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentalHealthMetrics to delete
     */
    where?: MentalHealthMetricWhereInput
    /**
     * Limit how many MentalHealthMetrics to delete.
     */
    limit?: number
  }

  /**
   * MentalHealthMetric without action
   */
  export type MentalHealthMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalHealthMetric
     */
    select?: MentalHealthMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalHealthMetric
     */
    omit?: MentalHealthMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalHealthMetricInclude<ExtArgs> | null
  }


  /**
   * Model ForumCategory
   */

  export type AggregateForumCategory = {
    _count: ForumCategoryCountAggregateOutputType | null
    _avg: ForumCategoryAvgAggregateOutputType | null
    _sum: ForumCategorySumAggregateOutputType | null
    _min: ForumCategoryMinAggregateOutputType | null
    _max: ForumCategoryMaxAggregateOutputType | null
  }

  export type ForumCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type ForumCategorySumAggregateOutputType = {
    id: number | null
  }

  export type ForumCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ForumCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ForumCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ForumCategoryAvgAggregateInputType = {
    id?: true
  }

  export type ForumCategorySumAggregateInputType = {
    id?: true
  }

  export type ForumCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ForumCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ForumCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ForumCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumCategory to aggregate.
     */
    where?: ForumCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCategories to fetch.
     */
    orderBy?: ForumCategoryOrderByWithRelationInput | ForumCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumCategories
    **/
    _count?: true | ForumCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumCategoryMaxAggregateInputType
  }

  export type GetForumCategoryAggregateType<T extends ForumCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateForumCategory]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateForumCategory[P]>
    : GetScalarType<T[P], AggregateForumCategory[P]>
  }




  export type ForumCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCategoryWhereInput
    orderBy?: ForumCategoryOrderByWithAggregationInput | ForumCategoryOrderByWithAggregationInput[]
    by: ForumCategoryScalarFieldEnum[] | ForumCategoryScalarFieldEnum
    having?: ForumCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumCategoryCountAggregateInputType | true
    _avg?: ForumCategoryAvgAggregateInputType
    _sum?: ForumCategorySumAggregateInputType
    _min?: ForumCategoryMinAggregateInputType
    _max?: ForumCategoryMaxAggregateInputType
  }

  export type ForumCategoryGroupByOutputType = {
    id: number
    name: string
    _count: ForumCategoryCountAggregateOutputType | null
    _avg: ForumCategoryAvgAggregateOutputType | null
    _sum: ForumCategorySumAggregateOutputType | null
    _min: ForumCategoryMinAggregateOutputType | null
    _max: ForumCategoryMaxAggregateOutputType | null
  }

  type GetForumCategoryGroupByPayload<T extends ForumCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumCategoryGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ForumCategoryGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], ForumCategoryGroupByOutputType[P]>
        : GetScalarType<T[P], ForumCategoryGroupByOutputType[P]>
      }
    >
  >


  export type ForumCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    posts?: boolean | ForumCategory$postsArgs<ExtArgs>
    _count?: boolean | ForumCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumCategory"]>



  export type ForumCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ForumCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["forumCategory"]>
  export type ForumCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | ForumCategory$postsArgs<ExtArgs>
    _count?: boolean | ForumCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ForumCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumCategory"
    objects: {
      posts: Prisma.$ForumPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["forumCategory"]>
    composites: {}
  }

  type ForumCategoryGetPayload<S extends boolean | null | undefined | ForumCategoryDefaultArgs> = $Result.GetResult<Prisma.$ForumCategoryPayload, S>

  type ForumCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumCategoryCountAggregateInputType | true
    }

  export interface ForumCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumCategory'], meta: { name: 'ForumCategory' } }
    /**
     * Find zero or one ForumCategory that matches the filter.
     * @param {ForumCategoryFindUniqueArgs} args - Arguments to find a ForumCategory
     * @example
     * // Get one ForumCategory
     * const forumCategory = await prisma.forumCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumCategoryFindUniqueArgs>(args: SelectSubset<T, ForumCategoryFindUniqueArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumCategoryFindUniqueOrThrowArgs} args - Arguments to find a ForumCategory
     * @example
     * // Get one ForumCategory
     * const forumCategory = await prisma.forumCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryFindFirstArgs} args - Arguments to find a ForumCategory
     * @example
     * // Get one ForumCategory
     * const forumCategory = await prisma.forumCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumCategoryFindFirstArgs>(args?: SelectSubset<T, ForumCategoryFindFirstArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryFindFirstOrThrowArgs} args - Arguments to find a ForumCategory
     * @example
     * // Get one ForumCategory
     * const forumCategory = await prisma.forumCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumCategories
     * const forumCategories = await prisma.forumCategory.findMany()
     * 
     * // Get first 10 ForumCategories
     * const forumCategories = await prisma.forumCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumCategoryWithIdOnly = await prisma.forumCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumCategoryFindManyArgs>(args?: SelectSubset<T, ForumCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumCategory.
     * @param {ForumCategoryCreateArgs} args - Arguments to create a ForumCategory.
     * @example
     * // Create one ForumCategory
     * const ForumCategory = await prisma.forumCategory.create({
     *   data: {
     *     // ... data to create a ForumCategory
     *   }
     * })
     * 
     */
    create<T extends ForumCategoryCreateArgs>(args: SelectSubset<T, ForumCategoryCreateArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumCategories.
     * @param {ForumCategoryCreateManyArgs} args - Arguments to create many ForumCategories.
     * @example
     * // Create many ForumCategories
     * const forumCategory = await prisma.forumCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumCategoryCreateManyArgs>(args?: SelectSubset<T, ForumCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ForumCategory.
     * @param {ForumCategoryDeleteArgs} args - Arguments to delete one ForumCategory.
     * @example
     * // Delete one ForumCategory
     * const ForumCategory = await prisma.forumCategory.delete({
     *   where: {
     *     // ... filter to delete one ForumCategory
     *   }
     * })
     * 
     */
    delete<T extends ForumCategoryDeleteArgs>(args: SelectSubset<T, ForumCategoryDeleteArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumCategory.
     * @param {ForumCategoryUpdateArgs} args - Arguments to update one ForumCategory.
     * @example
     * // Update one ForumCategory
     * const forumCategory = await prisma.forumCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumCategoryUpdateArgs>(args: SelectSubset<T, ForumCategoryUpdateArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumCategories.
     * @param {ForumCategoryDeleteManyArgs} args - Arguments to filter ForumCategories to delete.
     * @example
     * // Delete a few ForumCategories
     * const { count } = await prisma.forumCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumCategoryDeleteManyArgs>(args?: SelectSubset<T, ForumCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumCategories
     * const forumCategory = await prisma.forumCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumCategoryUpdateManyArgs>(args: SelectSubset<T, ForumCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ForumCategory.
     * @param {ForumCategoryUpsertArgs} args - Arguments to update or create a ForumCategory.
     * @example
     * // Update or create a ForumCategory
     * const forumCategory = await prisma.forumCategory.upsert({
     *   create: {
     *     // ... data to create a ForumCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumCategory we want to update
     *   }
     * })
     */
    upsert<T extends ForumCategoryUpsertArgs>(args: SelectSubset<T, ForumCategoryUpsertArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryCountArgs} args - Arguments to filter ForumCategories to count.
     * @example
     * // Count the number of ForumCategories
     * const count = await prisma.forumCategory.count({
     *   where: {
     *     // ... the filter for the ForumCategories we want to count
     *   }
     * })
    **/
    count<T extends ForumCategoryCountArgs>(
      args?: Subset<T, ForumCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
      ? T['select'] extends true
      ? number
      : GetScalarType<T['select'], ForumCategoryCountAggregateOutputType>
      : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumCategoryAggregateArgs>(args: Subset<T, ForumCategoryAggregateArgs>): Prisma.PrismaPromise<GetForumCategoryAggregateType<T>>

    /**
     * Group by ForumCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCategoryGroupByArgs} args - Group by arguments.
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
      T extends ForumCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: ForumCategoryGroupByArgs['orderBy'] }
      : { orderBy?: ForumCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the ForumCategory model
     */
    readonly fields: ForumCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends ForumCategory$postsArgs<ExtArgs> = {}>(args?: Subset<T, ForumCategory$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ForumCategory model
   */
  interface ForumCategoryFieldRefs {
    readonly id: FieldRef<"ForumCategory", 'Int'>
    readonly name: FieldRef<"ForumCategory", 'String'>
  }


  // Custom InputTypes
  /**
   * ForumCategory findUnique
   */
  export type ForumCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ForumCategory to fetch.
     */
    where: ForumCategoryWhereUniqueInput
  }

  /**
   * ForumCategory findUniqueOrThrow
   */
  export type ForumCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ForumCategory to fetch.
     */
    where: ForumCategoryWhereUniqueInput
  }

  /**
   * ForumCategory findFirst
   */
  export type ForumCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ForumCategory to fetch.
     */
    where?: ForumCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCategories to fetch.
     */
    orderBy?: ForumCategoryOrderByWithRelationInput | ForumCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumCategories.
     */
    cursor?: ForumCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumCategories.
     */
    distinct?: ForumCategoryScalarFieldEnum | ForumCategoryScalarFieldEnum[]
  }

  /**
   * ForumCategory findFirstOrThrow
   */
  export type ForumCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ForumCategory to fetch.
     */
    where?: ForumCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCategories to fetch.
     */
    orderBy?: ForumCategoryOrderByWithRelationInput | ForumCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumCategories.
     */
    cursor?: ForumCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumCategories.
     */
    distinct?: ForumCategoryScalarFieldEnum | ForumCategoryScalarFieldEnum[]
  }

  /**
   * ForumCategory findMany
   */
  export type ForumCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ForumCategories to fetch.
     */
    where?: ForumCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumCategories to fetch.
     */
    orderBy?: ForumCategoryOrderByWithRelationInput | ForumCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumCategories.
     */
    cursor?: ForumCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumCategories.
     */
    skip?: number
    distinct?: ForumCategoryScalarFieldEnum | ForumCategoryScalarFieldEnum[]
  }

  /**
   * ForumCategory create
   */
  export type ForumCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumCategory.
     */
    data: XOR<ForumCategoryCreateInput, ForumCategoryUncheckedCreateInput>
  }

  /**
   * ForumCategory createMany
   */
  export type ForumCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumCategories.
     */
    data: ForumCategoryCreateManyInput | ForumCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumCategory update
   */
  export type ForumCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumCategory.
     */
    data: XOR<ForumCategoryUpdateInput, ForumCategoryUncheckedUpdateInput>
    /**
     * Choose, which ForumCategory to update.
     */
    where: ForumCategoryWhereUniqueInput
  }

  /**
   * ForumCategory updateMany
   */
  export type ForumCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumCategories.
     */
    data: XOR<ForumCategoryUpdateManyMutationInput, ForumCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ForumCategories to update
     */
    where?: ForumCategoryWhereInput
    /**
     * Limit how many ForumCategories to update.
     */
    limit?: number
  }

  /**
   * ForumCategory upsert
   */
  export type ForumCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumCategory to update in case it exists.
     */
    where: ForumCategoryWhereUniqueInput
    /**
     * In case the ForumCategory found by the `where` argument doesn't exist, create a new ForumCategory with this data.
     */
    create: XOR<ForumCategoryCreateInput, ForumCategoryUncheckedCreateInput>
    /**
     * In case the ForumCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumCategoryUpdateInput, ForumCategoryUncheckedUpdateInput>
  }

  /**
   * ForumCategory delete
   */
  export type ForumCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    /**
     * Filter which ForumCategory to delete.
     */
    where: ForumCategoryWhereUniqueInput
  }

  /**
   * ForumCategory deleteMany
   */
  export type ForumCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumCategories to delete
     */
    where?: ForumCategoryWhereInput
    /**
     * Limit how many ForumCategories to delete.
     */
    limit?: number
  }

  /**
   * ForumCategory.posts
   */
  export type ForumCategory$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    where?: ForumPostWhereInput
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    cursor?: ForumPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * ForumCategory without action
   */
  export type ForumCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ForumPost
   */

  export type AggregateForumPost = {
    _count: ForumPostCountAggregateOutputType | null
    _avg: ForumPostAvgAggregateOutputType | null
    _sum: ForumPostSumAggregateOutputType | null
    _min: ForumPostMinAggregateOutputType | null
    _max: ForumPostMaxAggregateOutputType | null
  }

  export type ForumPostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type ForumPostSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type ForumPostMinAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    title: string | null
    content: string | null
    isAnonymous: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumPostMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    title: string | null
    content: string | null
    isAnonymous: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ForumPostCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    title: number
    content: number
    isAnonymous: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ForumPostAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type ForumPostSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type ForumPostMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    content?: true
    isAnonymous?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumPostMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    content?: true
    isAnonymous?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ForumPostCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    content?: true
    isAnonymous?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ForumPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumPost to aggregate.
     */
    where?: ForumPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumPosts to fetch.
     */
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumPosts
    **/
    _count?: true | ForumPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumPostMaxAggregateInputType
  }

  export type GetForumPostAggregateType<T extends ForumPostAggregateArgs> = {
    [P in keyof T & keyof AggregateForumPost]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateForumPost[P]>
    : GetScalarType<T[P], AggregateForumPost[P]>
  }




  export type ForumPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumPostWhereInput
    orderBy?: ForumPostOrderByWithAggregationInput | ForumPostOrderByWithAggregationInput[]
    by: ForumPostScalarFieldEnum[] | ForumPostScalarFieldEnum
    having?: ForumPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumPostCountAggregateInputType | true
    _avg?: ForumPostAvgAggregateInputType
    _sum?: ForumPostSumAggregateInputType
    _min?: ForumPostMinAggregateInputType
    _max?: ForumPostMaxAggregateInputType
  }

  export type ForumPostGroupByOutputType = {
    id: number
    userId: number | null
    categoryId: number | null
    title: string
    content: string
    isAnonymous: boolean
    createdAt: Date
    updatedAt: Date
    _count: ForumPostCountAggregateOutputType | null
    _avg: ForumPostAvgAggregateOutputType | null
    _sum: ForumPostSumAggregateOutputType | null
    _min: ForumPostMinAggregateOutputType | null
    _max: ForumPostMaxAggregateOutputType | null
  }

  type GetForumPostGroupByPayload<T extends ForumPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumPostGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ForumPostGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], ForumPostGroupByOutputType[P]>
        : GetScalarType<T[P], ForumPostGroupByOutputType[P]>
      }
    >
  >


  export type ForumPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ForumPost$userArgs<ExtArgs>
    category?: boolean | ForumPost$categoryArgs<ExtArgs>
    comments?: boolean | ForumPost$commentsArgs<ExtArgs>
    _count?: boolean | ForumPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forumPost"]>



  export type ForumPostSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ForumPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId" | "title" | "content" | "isAnonymous" | "createdAt" | "updatedAt", ExtArgs["result"]["forumPost"]>
  export type ForumPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ForumPost$userArgs<ExtArgs>
    category?: boolean | ForumPost$categoryArgs<ExtArgs>
    comments?: boolean | ForumPost$commentsArgs<ExtArgs>
    _count?: boolean | ForumPostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ForumPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      category: Prisma.$ForumCategoryPayload<ExtArgs> | null
      comments: Prisma.$ForumCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      categoryId: number | null
      title: string
      content: string
      isAnonymous: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["forumPost"]>
    composites: {}
  }

  type ForumPostGetPayload<S extends boolean | null | undefined | ForumPostDefaultArgs> = $Result.GetResult<Prisma.$ForumPostPayload, S>

  type ForumPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumPostCountAggregateInputType | true
    }

  export interface ForumPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumPost'], meta: { name: 'ForumPost' } }
    /**
     * Find zero or one ForumPost that matches the filter.
     * @param {ForumPostFindUniqueArgs} args - Arguments to find a ForumPost
     * @example
     * // Get one ForumPost
     * const forumPost = await prisma.forumPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumPostFindUniqueArgs>(args: SelectSubset<T, ForumPostFindUniqueArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumPostFindUniqueOrThrowArgs} args - Arguments to find a ForumPost
     * @example
     * // Get one ForumPost
     * const forumPost = await prisma.forumPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumPostFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostFindFirstArgs} args - Arguments to find a ForumPost
     * @example
     * // Get one ForumPost
     * const forumPost = await prisma.forumPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumPostFindFirstArgs>(args?: SelectSubset<T, ForumPostFindFirstArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostFindFirstOrThrowArgs} args - Arguments to find a ForumPost
     * @example
     * // Get one ForumPost
     * const forumPost = await prisma.forumPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumPostFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumPosts
     * const forumPosts = await prisma.forumPost.findMany()
     * 
     * // Get first 10 ForumPosts
     * const forumPosts = await prisma.forumPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumPostWithIdOnly = await prisma.forumPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumPostFindManyArgs>(args?: SelectSubset<T, ForumPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumPost.
     * @param {ForumPostCreateArgs} args - Arguments to create a ForumPost.
     * @example
     * // Create one ForumPost
     * const ForumPost = await prisma.forumPost.create({
     *   data: {
     *     // ... data to create a ForumPost
     *   }
     * })
     * 
     */
    create<T extends ForumPostCreateArgs>(args: SelectSubset<T, ForumPostCreateArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumPosts.
     * @param {ForumPostCreateManyArgs} args - Arguments to create many ForumPosts.
     * @example
     * // Create many ForumPosts
     * const forumPost = await prisma.forumPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumPostCreateManyArgs>(args?: SelectSubset<T, ForumPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ForumPost.
     * @param {ForumPostDeleteArgs} args - Arguments to delete one ForumPost.
     * @example
     * // Delete one ForumPost
     * const ForumPost = await prisma.forumPost.delete({
     *   where: {
     *     // ... filter to delete one ForumPost
     *   }
     * })
     * 
     */
    delete<T extends ForumPostDeleteArgs>(args: SelectSubset<T, ForumPostDeleteArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumPost.
     * @param {ForumPostUpdateArgs} args - Arguments to update one ForumPost.
     * @example
     * // Update one ForumPost
     * const forumPost = await prisma.forumPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumPostUpdateArgs>(args: SelectSubset<T, ForumPostUpdateArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumPosts.
     * @param {ForumPostDeleteManyArgs} args - Arguments to filter ForumPosts to delete.
     * @example
     * // Delete a few ForumPosts
     * const { count } = await prisma.forumPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumPostDeleteManyArgs>(args?: SelectSubset<T, ForumPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumPosts
     * const forumPost = await prisma.forumPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumPostUpdateManyArgs>(args: SelectSubset<T, ForumPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ForumPost.
     * @param {ForumPostUpsertArgs} args - Arguments to update or create a ForumPost.
     * @example
     * // Update or create a ForumPost
     * const forumPost = await prisma.forumPost.upsert({
     *   create: {
     *     // ... data to create a ForumPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumPost we want to update
     *   }
     * })
     */
    upsert<T extends ForumPostUpsertArgs>(args: SelectSubset<T, ForumPostUpsertArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostCountArgs} args - Arguments to filter ForumPosts to count.
     * @example
     * // Count the number of ForumPosts
     * const count = await prisma.forumPost.count({
     *   where: {
     *     // ... the filter for the ForumPosts we want to count
     *   }
     * })
    **/
    count<T extends ForumPostCountArgs>(
      args?: Subset<T, ForumPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
      ? T['select'] extends true
      ? number
      : GetScalarType<T['select'], ForumPostCountAggregateOutputType>
      : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumPostAggregateArgs>(args: Subset<T, ForumPostAggregateArgs>): Prisma.PrismaPromise<GetForumPostAggregateType<T>>

    /**
     * Group by ForumPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumPostGroupByArgs} args - Group by arguments.
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
      T extends ForumPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: ForumPostGroupByArgs['orderBy'] }
      : { orderBy?: ForumPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the ForumPost model
     */
    readonly fields: ForumPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ForumPost$userArgs<ExtArgs> = {}>(args?: Subset<T, ForumPost$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends ForumPost$categoryArgs<ExtArgs> = {}>(args?: Subset<T, ForumPost$categoryArgs<ExtArgs>>): Prisma__ForumCategoryClient<$Result.GetResult<Prisma.$ForumCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comments<T extends ForumPost$commentsArgs<ExtArgs> = {}>(args?: Subset<T, ForumPost$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ForumPost model
   */
  interface ForumPostFieldRefs {
    readonly id: FieldRef<"ForumPost", 'Int'>
    readonly userId: FieldRef<"ForumPost", 'Int'>
    readonly categoryId: FieldRef<"ForumPost", 'Int'>
    readonly title: FieldRef<"ForumPost", 'String'>
    readonly content: FieldRef<"ForumPost", 'String'>
    readonly isAnonymous: FieldRef<"ForumPost", 'Boolean'>
    readonly createdAt: FieldRef<"ForumPost", 'DateTime'>
    readonly updatedAt: FieldRef<"ForumPost", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * ForumPost findUnique
   */
  export type ForumPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPost to fetch.
     */
    where: ForumPostWhereUniqueInput
  }

  /**
   * ForumPost findUniqueOrThrow
   */
  export type ForumPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPost to fetch.
     */
    where: ForumPostWhereUniqueInput
  }

  /**
   * ForumPost findFirst
   */
  export type ForumPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPost to fetch.
     */
    where?: ForumPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumPosts to fetch.
     */
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumPosts.
     */
    cursor?: ForumPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumPosts.
     */
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * ForumPost findFirstOrThrow
   */
  export type ForumPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPost to fetch.
     */
    where?: ForumPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumPosts to fetch.
     */
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumPosts.
     */
    cursor?: ForumPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumPosts.
     */
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * ForumPost findMany
   */
  export type ForumPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter, which ForumPosts to fetch.
     */
    where?: ForumPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumPosts to fetch.
     */
    orderBy?: ForumPostOrderByWithRelationInput | ForumPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumPosts.
     */
    cursor?: ForumPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumPosts.
     */
    skip?: number
    distinct?: ForumPostScalarFieldEnum | ForumPostScalarFieldEnum[]
  }

  /**
   * ForumPost create
   */
  export type ForumPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumPost.
     */
    data: XOR<ForumPostCreateInput, ForumPostUncheckedCreateInput>
  }

  /**
   * ForumPost createMany
   */
  export type ForumPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumPosts.
     */
    data: ForumPostCreateManyInput | ForumPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumPost update
   */
  export type ForumPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumPost.
     */
    data: XOR<ForumPostUpdateInput, ForumPostUncheckedUpdateInput>
    /**
     * Choose, which ForumPost to update.
     */
    where: ForumPostWhereUniqueInput
  }

  /**
   * ForumPost updateMany
   */
  export type ForumPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumPosts.
     */
    data: XOR<ForumPostUpdateManyMutationInput, ForumPostUncheckedUpdateManyInput>
    /**
     * Filter which ForumPosts to update
     */
    where?: ForumPostWhereInput
    /**
     * Limit how many ForumPosts to update.
     */
    limit?: number
  }

  /**
   * ForumPost upsert
   */
  export type ForumPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumPost to update in case it exists.
     */
    where: ForumPostWhereUniqueInput
    /**
     * In case the ForumPost found by the `where` argument doesn't exist, create a new ForumPost with this data.
     */
    create: XOR<ForumPostCreateInput, ForumPostUncheckedCreateInput>
    /**
     * In case the ForumPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumPostUpdateInput, ForumPostUncheckedUpdateInput>
  }

  /**
   * ForumPost delete
   */
  export type ForumPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
    /**
     * Filter which ForumPost to delete.
     */
    where: ForumPostWhereUniqueInput
  }

  /**
   * ForumPost deleteMany
   */
  export type ForumPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumPosts to delete
     */
    where?: ForumPostWhereInput
    /**
     * Limit how many ForumPosts to delete.
     */
    limit?: number
  }

  /**
   * ForumPost.user
   */
  export type ForumPost$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ForumPost.category
   */
  export type ForumPost$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCategory
     */
    select?: ForumCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumCategory
     */
    omit?: ForumCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCategoryInclude<ExtArgs> | null
    where?: ForumCategoryWhereInput
  }

  /**
   * ForumPost.comments
   */
  export type ForumPost$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    cursor?: ForumCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumPost without action
   */
  export type ForumPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumPost
     */
    select?: ForumPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumPost
     */
    omit?: ForumPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumPostInclude<ExtArgs> | null
  }


  /**
   * Model ForumComment
   */

  export type AggregateForumComment = {
    _count: ForumCommentCountAggregateOutputType | null
    _avg: ForumCommentAvgAggregateOutputType | null
    _sum: ForumCommentSumAggregateOutputType | null
    _min: ForumCommentMinAggregateOutputType | null
    _max: ForumCommentMaxAggregateOutputType | null
  }

  export type ForumCommentAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type ForumCommentSumAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type ForumCommentMinAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    content: string | null
    isAnonymous: boolean | null
    createdAt: Date | null
  }

  export type ForumCommentMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    content: string | null
    isAnonymous: boolean | null
    createdAt: Date | null
  }

  export type ForumCommentCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    content: number
    isAnonymous: number
    createdAt: number
    _all: number
  }


  export type ForumCommentAvgAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type ForumCommentSumAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type ForumCommentMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    content?: true
    isAnonymous?: true
    createdAt?: true
  }

  export type ForumCommentMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    content?: true
    isAnonymous?: true
    createdAt?: true
  }

  export type ForumCommentCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    content?: true
    isAnonymous?: true
    createdAt?: true
    _all?: true
  }

  export type ForumCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumComment to aggregate.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForumComments
    **/
    _count?: true | ForumCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumCommentMaxAggregateInputType
  }

  export type GetForumCommentAggregateType<T extends ForumCommentAggregateArgs> = {
    [P in keyof T & keyof AggregateForumComment]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateForumComment[P]>
    : GetScalarType<T[P], AggregateForumComment[P]>
  }




  export type ForumCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumCommentWhereInput
    orderBy?: ForumCommentOrderByWithAggregationInput | ForumCommentOrderByWithAggregationInput[]
    by: ForumCommentScalarFieldEnum[] | ForumCommentScalarFieldEnum
    having?: ForumCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumCommentCountAggregateInputType | true
    _avg?: ForumCommentAvgAggregateInputType
    _sum?: ForumCommentSumAggregateInputType
    _min?: ForumCommentMinAggregateInputType
    _max?: ForumCommentMaxAggregateInputType
  }

  export type ForumCommentGroupByOutputType = {
    id: number
    postId: number
    userId: number | null
    content: string
    isAnonymous: boolean
    createdAt: Date
    _count: ForumCommentCountAggregateOutputType | null
    _avg: ForumCommentAvgAggregateOutputType | null
    _sum: ForumCommentSumAggregateOutputType | null
    _min: ForumCommentMinAggregateOutputType | null
    _max: ForumCommentMaxAggregateOutputType | null
  }

  type GetForumCommentGroupByPayload<T extends ForumCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumCommentGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ForumCommentGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], ForumCommentGroupByOutputType[P]>
        : GetScalarType<T[P], ForumCommentGroupByOutputType[P]>
      }
    >
  >


  export type ForumCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    content?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    post?: boolean | ForumPostDefaultArgs<ExtArgs>
    user?: boolean | ForumComment$userArgs<ExtArgs>
  }, ExtArgs["result"]["forumComment"]>



  export type ForumCommentSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    content?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
  }

  export type ForumCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "content" | "isAnonymous" | "createdAt", ExtArgs["result"]["forumComment"]>
  export type ForumCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | ForumPostDefaultArgs<ExtArgs>
    user?: boolean | ForumComment$userArgs<ExtArgs>
  }

  export type $ForumCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForumComment"
    objects: {
      post: Prisma.$ForumPostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      userId: number | null
      content: string
      isAnonymous: boolean
      createdAt: Date
    }, ExtArgs["result"]["forumComment"]>
    composites: {}
  }

  type ForumCommentGetPayload<S extends boolean | null | undefined | ForumCommentDefaultArgs> = $Result.GetResult<Prisma.$ForumCommentPayload, S>

  type ForumCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumCommentCountAggregateInputType | true
    }

  export interface ForumCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForumComment'], meta: { name: 'ForumComment' } }
    /**
     * Find zero or one ForumComment that matches the filter.
     * @param {ForumCommentFindUniqueArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumCommentFindUniqueArgs>(args: SelectSubset<T, ForumCommentFindUniqueArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForumComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumCommentFindUniqueOrThrowArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentFindFirstArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumCommentFindFirstArgs>(args?: SelectSubset<T, ForumCommentFindFirstArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForumComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentFindFirstOrThrowArgs} args - Arguments to find a ForumComment
     * @example
     * // Get one ForumComment
     * const forumComment = await prisma.forumComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForumComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForumComments
     * const forumComments = await prisma.forumComment.findMany()
     * 
     * // Get first 10 ForumComments
     * const forumComments = await prisma.forumComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumCommentWithIdOnly = await prisma.forumComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumCommentFindManyArgs>(args?: SelectSubset<T, ForumCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForumComment.
     * @param {ForumCommentCreateArgs} args - Arguments to create a ForumComment.
     * @example
     * // Create one ForumComment
     * const ForumComment = await prisma.forumComment.create({
     *   data: {
     *     // ... data to create a ForumComment
     *   }
     * })
     * 
     */
    create<T extends ForumCommentCreateArgs>(args: SelectSubset<T, ForumCommentCreateArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForumComments.
     * @param {ForumCommentCreateManyArgs} args - Arguments to create many ForumComments.
     * @example
     * // Create many ForumComments
     * const forumComment = await prisma.forumComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumCommentCreateManyArgs>(args?: SelectSubset<T, ForumCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ForumComment.
     * @param {ForumCommentDeleteArgs} args - Arguments to delete one ForumComment.
     * @example
     * // Delete one ForumComment
     * const ForumComment = await prisma.forumComment.delete({
     *   where: {
     *     // ... filter to delete one ForumComment
     *   }
     * })
     * 
     */
    delete<T extends ForumCommentDeleteArgs>(args: SelectSubset<T, ForumCommentDeleteArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForumComment.
     * @param {ForumCommentUpdateArgs} args - Arguments to update one ForumComment.
     * @example
     * // Update one ForumComment
     * const forumComment = await prisma.forumComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumCommentUpdateArgs>(args: SelectSubset<T, ForumCommentUpdateArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForumComments.
     * @param {ForumCommentDeleteManyArgs} args - Arguments to filter ForumComments to delete.
     * @example
     * // Delete a few ForumComments
     * const { count } = await prisma.forumComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumCommentDeleteManyArgs>(args?: SelectSubset<T, ForumCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForumComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForumComments
     * const forumComment = await prisma.forumComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumCommentUpdateManyArgs>(args: SelectSubset<T, ForumCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ForumComment.
     * @param {ForumCommentUpsertArgs} args - Arguments to update or create a ForumComment.
     * @example
     * // Update or create a ForumComment
     * const forumComment = await prisma.forumComment.upsert({
     *   create: {
     *     // ... data to create a ForumComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForumComment we want to update
     *   }
     * })
     */
    upsert<T extends ForumCommentUpsertArgs>(args: SelectSubset<T, ForumCommentUpsertArgs<ExtArgs>>): Prisma__ForumCommentClient<$Result.GetResult<Prisma.$ForumCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForumComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentCountArgs} args - Arguments to filter ForumComments to count.
     * @example
     * // Count the number of ForumComments
     * const count = await prisma.forumComment.count({
     *   where: {
     *     // ... the filter for the ForumComments we want to count
     *   }
     * })
    **/
    count<T extends ForumCommentCountArgs>(
      args?: Subset<T, ForumCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
      ? T['select'] extends true
      ? number
      : GetScalarType<T['select'], ForumCommentCountAggregateOutputType>
      : number
    >

    /**
     * Allows you to perform aggregations operations on a ForumComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumCommentAggregateArgs>(args: Subset<T, ForumCommentAggregateArgs>): Prisma.PrismaPromise<GetForumCommentAggregateType<T>>

    /**
     * Group by ForumComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCommentGroupByArgs} args - Group by arguments.
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
      T extends ForumCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
      ? { orderBy: ForumCommentGroupByArgs['orderBy'] }
      : { orderBy?: ForumCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the ForumComment model
     */
    readonly fields: ForumCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForumComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends ForumPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForumPostDefaultArgs<ExtArgs>>): Prisma__ForumPostClient<$Result.GetResult<Prisma.$ForumPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends ForumComment$userArgs<ExtArgs> = {}>(args?: Subset<T, ForumComment$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ForumComment model
   */
  interface ForumCommentFieldRefs {
    readonly id: FieldRef<"ForumComment", 'Int'>
    readonly postId: FieldRef<"ForumComment", 'Int'>
    readonly userId: FieldRef<"ForumComment", 'Int'>
    readonly content: FieldRef<"ForumComment", 'String'>
    readonly isAnonymous: FieldRef<"ForumComment", 'Boolean'>
    readonly createdAt: FieldRef<"ForumComment", 'DateTime'>
  }


  // Custom InputTypes
  /**
   * ForumComment findUnique
   */
  export type ForumCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment findUniqueOrThrow
   */
  export type ForumCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment findFirst
   */
  export type ForumCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumComments.
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumComments.
     */
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment findFirstOrThrow
   */
  export type ForumCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComment to fetch.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForumComments.
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForumComments.
     */
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment findMany
   */
  export type ForumCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter, which ForumComments to fetch.
     */
    where?: ForumCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForumComments to fetch.
     */
    orderBy?: ForumCommentOrderByWithRelationInput | ForumCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForumComments.
     */
    cursor?: ForumCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForumComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForumComments.
     */
    skip?: number
    distinct?: ForumCommentScalarFieldEnum | ForumCommentScalarFieldEnum[]
  }

  /**
   * ForumComment create
   */
  export type ForumCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a ForumComment.
     */
    data: XOR<ForumCommentCreateInput, ForumCommentUncheckedCreateInput>
  }

  /**
   * ForumComment createMany
   */
  export type ForumCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForumComments.
     */
    data: ForumCommentCreateManyInput | ForumCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForumComment update
   */
  export type ForumCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a ForumComment.
     */
    data: XOR<ForumCommentUpdateInput, ForumCommentUncheckedUpdateInput>
    /**
     * Choose, which ForumComment to update.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment updateMany
   */
  export type ForumCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForumComments.
     */
    data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyInput>
    /**
     * Filter which ForumComments to update
     */
    where?: ForumCommentWhereInput
    /**
     * Limit how many ForumComments to update.
     */
    limit?: number
  }

  /**
   * ForumComment upsert
   */
  export type ForumCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the ForumComment to update in case it exists.
     */
    where: ForumCommentWhereUniqueInput
    /**
     * In case the ForumComment found by the `where` argument doesn't exist, create a new ForumComment with this data.
     */
    create: XOR<ForumCommentCreateInput, ForumCommentUncheckedCreateInput>
    /**
     * In case the ForumComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumCommentUpdateInput, ForumCommentUncheckedUpdateInput>
  }

  /**
   * ForumComment delete
   */
  export type ForumCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
    /**
     * Filter which ForumComment to delete.
     */
    where: ForumCommentWhereUniqueInput
  }

  /**
   * ForumComment deleteMany
   */
  export type ForumCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForumComments to delete
     */
    where?: ForumCommentWhereInput
    /**
     * Limit how many ForumComments to delete.
     */
    limit?: number
  }

  /**
   * ForumComment.user
   */
  export type ForumComment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ForumComment without action
   */
  export type ForumCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumComment
     */
    select?: ForumCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForumComment
     */
    omit?: ForumCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumCommentInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceAvgAggregateOutputType = {
    id: number | null
  }

  export type ResourceSumAggregateOutputType = {
    id: number | null
  }

  export type ResourceMinAggregateOutputType = {
    id: number | null
    title: string | null
    type: string | null
    content: string | null
    url: string | null
    createdAt: Date | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    type: string | null
    content: string | null
    url: string | null
    createdAt: Date | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    title: number
    type: number
    content: number
    url: number
    createdAt: number
    _all: number
  }


  export type ResourceAvgAggregateInputType = {
    id?: true
  }

  export type ResourceSumAggregateInputType = {
    id?: true
  }

  export type ResourceMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    content?: true
    url?: true
    createdAt?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    content?: true
    url?: true
    createdAt?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    content?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
    [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
    ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateResource[P]>
    : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _avg?: ResourceAvgAggregateInputType
    _sum?: ResourceSumAggregateInputType
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: number
    title: string
    type: string | null
    content: string | null
    url: string | null
    createdAt: Date
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
        ? T[P] extends boolean
        ? number
        : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        : GetScalarType<T[P], ResourceGroupByOutputType[P]>
      }
    >
  >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    content?: boolean
    url?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["resource"]>



  export type ResourceSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    content?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "content" | "url" | "createdAt", ExtArgs["result"]["resource"]>

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      type: string | null
      content: string | null
      url: string | null
      createdAt: Date
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export ourceDelegate < ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {} > {
    [K: symbol]: { types: Prisma.TypeMap < ExtArgs > ['model']['Resource'], meta: { name: 'Resource' } }
  /**
   * Find zero or one Resource that matches the filter.
   * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
   * @example
   * // Get one Resource
   * const resource = await prisma.resource.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
   * @example
   * // Get one Resource
   * const resource = await prisma.resource.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Resource that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
   * @example
   * // Get one Resource
   * const resource = await prisma.resource.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends ResourceFindFirstArgs>(args ?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first Resource that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
   * @example
   * // Get one Resource
   * const resource = await prisma.resource.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args ?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more Resources that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Resources
   * const resources = await prisma.resource.findMany()
   * 
   * // Get first 10 Resources
   * const resources = await prisma.resource.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends ResourceFindManyArgs>(args ?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a Resource.
   * @param {ResourceCreateArgs} args - Arguments to create a Resource.
   * @example
   * // Create one Resource
   * const Resource = await prisma.resource.create({
   *   data: {
   *     // ... data to create a Resource
   *   }
   * })
   * 
   */
  create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many Resources.
   * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
   * @example
   * // Create many Resources
   * const resource = await prisma.resource.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends ResourceCreateManyArgs>(args ?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

  /**
   * Delete a Resource.
   * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
   * @example
   * // Delete one Resource
   * const Resource = await prisma.resource.delete({
   *   where: {
   *     // ... filter to delete one Resource
   *   }
   * })
   * 
   */
  delete <T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one Resource.
   * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
   * @example
   * // Update one Resource
   * const resource = await prisma.resource.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more Resources.
   * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
   * @example
   * // Delete a few Resources
   * const { count } = await prisma.resource.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends ResourceDeleteManyArgs>(args ?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

  /**
   * Update zero or more Resources.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Resources
   * const resource = await prisma.resource.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

  /**
   * Create or update one Resource.
   * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
   * @example
   * // Update or create a Resource
   * const resource = await prisma.resource.upsert({
   *   create: {
   *     // ... data to create a Resource
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Resource we want to update
   *   }
   * })
   */
  upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of Resources.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
   * @example
   * // Count the number of Resources
   * const count = await prisma.resource.count({
   *   where: {
   *     // ... the filter for the Resources we want to count
   *   }
   * })
  **/
  count<T extends ResourceCountArgs>(
    args ?: Subset<T, ResourceCountArgs>,
  ): Prisma.PrismaPromise<
    T extends $Utils.Record<'select', any>
    ? T['select'] extends true
    ? number
    : GetScalarType<T['select'], ResourceCountAggregateOutputType>
    : number
  >

  /**
   * Allows you to perform aggregations operations on a Resource.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
  aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

  /**
   * Group by Resource.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {ResourceGroupByArgs} args - Group by arguments.
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
  groupBy <
    T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
        OrderByArg extends True extends HasSelectOrTake
          ? { orderBy: ResourceGroupByArgs['orderBy'] }
          : { orderBy?: ResourceGroupByArgs['orderBy'] },
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
    > (args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): { } extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for Resource.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
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
 * Fields of the Resource model
 */
interface ResourceFieldRefs {
  readonly id: FieldRef<"Resource", 'Int'>
  readonly title: FieldRef<"Resource", 'String'>
  readonly type: FieldRef<"Resource", 'String'>
  readonly content: FieldRef<"Resource", 'String'>
  readonly url: FieldRef<"Resource", 'String'>
  readonly createdAt: FieldRef<"Resource", 'DateTime'>
}


// Custom InputTypes
/**
 * Resource findUnique
 */
export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Resource
   */
  select?: ResourceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Resource
   */
  omit?: ResourceOmit<ExtArgs> | null
  /**
   * Filter, which Resource to fetch.
   */
  where: ResourceWhereUniqueInput
}

/**
 * Resource findUniqueOrThrow
 */
export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Resource
   */
  select?: ResourceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Resource
   */
  omit?: ResourceOmit<ExtArgs> | null
  /**
   * Filter, which Resource to fetch.
   */
  where: ResourceWhereUniqueInput
}

/**
 * Resource findFirst
 */
export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Resource
   */
  select?: ResourceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Resource
   */
  omit?: ResourceOmit<ExtArgs> | null
  /**
   * Filter, which Resource to fetch.
   */
  where?: ResourceWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Resources to fetch.
   */
  orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for Resources.
   */
  cursor?: ResourceWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Resources from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Resources.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Resources.
   */
  distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
}

/**
 * Resource findFirstOrThrow
 */
export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Resource
   */
  select?: ResourceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Resource
   */
  omit?: ResourceOmit<ExtArgs> | null
  /**
   * Filter, which Resource to fetch.
   */
  where?: ResourceWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Resources to fetch.
   */
  orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for Resources.
   */
  cursor?: ResourceWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Resources from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Resources.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of Resources.
   */
  distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
}

/**
 * Resource findMany
 */
export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Resource
   */
  select?: ResourceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Resource
   */
  omit?: ResourceOmit<ExtArgs> | null
  /**
   * Filter, which Resources to fetch.
   */
  where?: ResourceWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of Resources to fetch.
   */
  orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing Resources.
   */
  cursor?: ResourceWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` Resources from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` Resources.
   */
  skip?: number
  distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
}

/**
 * Resource create
 */
export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Resource
   */
  select?: ResourceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Resource
   */
  omit?: ResourceOmit<ExtArgs> | null
  /**
   * The data needed to create a Resource.
   */
  data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
}

/**
 * Resource createMany
 */
export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * The data used to create many Resources.
   */
  data: ResourceCreateManyInput | ResourceCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * Resource update
 */
export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Resource
   */
  select?: ResourceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Resource
   */
  omit?: ResourceOmit<ExtArgs> | null
  /**
   * The data needed to update a Resource.
   */
  data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  /**
   * Choose, which Resource to update.
   */
  where: ResourceWhereUniqueInput
}

/**
 * Resource updateMany
 */
export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * The data used to update Resources.
   */
  data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
  /**
   * Filter which Resources to update
   */
  where?: ResourceWhereInput
  /**
   * Limit how many Resources to update.
   */
  limit?: number
}

/**
 * Resource upsert
 */
export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Resource
   */
  select?: ResourceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Resource
   */
  omit?: ResourceOmit<ExtArgs> | null
  /**
   * The filter to search for the Resource to update in case it exists.
   */
  where: ResourceWhereUniqueInput
  /**
   * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
   */
  create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  /**
   * In case the Resource was found with the provided `where` argument, update it with this data.
   */
  update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
}

/**
 * Resource delete
 */
export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Resource
   */
  select?: ResourceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Resource
   */
  omit?: ResourceOmit<ExtArgs> | null
  /**
   * Filter which Resource to delete.
   */
  where: ResourceWhereUniqueInput
}

/**
 * Resource deleteMany
 */
export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Filter which Resources to delete
   */
  where?: ResourceWhereInput
  /**
   * Limit how many Resources to delete.
   */
  limit?: number
}

/**
 * Resource without action
 */
export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the Resource
   */
  select?: ResourceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the Resource
   */
  omit?: ResourceOmit<ExtArgs> | null
}


/**
 * Model UserPreference
 */

export type AggregateUserPreference = {
  _count: UserPreferenceCountAggregateOutputType | null
  _avg: UserPreferenceAvgAggregateOutputType | null
  _sum: UserPreferenceSumAggregateOutputType | null
  _min: UserPreferenceMinAggregateOutputType | null
  _max: UserPreferenceMaxAggregateOutputType | null
}

export type UserPreferenceAvgAggregateOutputType = {
  id: number | null
  userId: number | null
}

export type UserPreferenceSumAggregateOutputType = {
  id: number | null
  userId: number | null
}

export type UserPreferenceMinAggregateOutputType = {
  id: number | null
  userId: number | null
  privacySetting: string | null
  languagePreference: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type UserPreferenceMaxAggregateOutputType = {
  id: number | null
  userId: number | null
  privacySetting: string | null
  languagePreference: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type UserPreferenceCountAggregateOutputType = {
  id: number
  userId: number
  privacySetting: number
  notificationPreferences: number
  languagePreference: number
  accessibilityOptions: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type UserPreferenceAvgAggregateInputType = {
  id?: true
  userId?: true
}

export type UserPreferenceSumAggregateInputType = {
  id?: true
  userId?: true
}

export type UserPreferenceMinAggregateInputType = {
  id?: true
  userId?: true
  privacySetting?: true
  languagePreference?: true
  createdAt?: true
  updatedAt?: true
}

export type UserPreferenceMaxAggregateInputType = {
  id?: true
  userId?: true
  privacySetting?: true
  languagePreference?: true
  createdAt?: true
  updatedAt?: true
}

export type UserPreferenceCountAggregateInputType = {
  id?: true
  userId?: true
  privacySetting?: true
  notificationPreferences?: true
  languagePreference?: true
  accessibilityOptions?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type UserPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Filter which UserPreference to aggregate.
   */
  where?: UserPreferenceWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of UserPreferences to fetch.
   */
  orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the start position
   */
  cursor?: UserPreferenceWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` UserPreferences from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` UserPreferences.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Count returned UserPreferences
  **/
  _count?: true | UserPreferenceCountAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to average
  **/
  _avg?: UserPreferenceAvgAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to sum
  **/
  _sum?: UserPreferenceSumAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the minimum value
  **/
  _min?: UserPreferenceMinAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the maximum value
  **/
  _max?: UserPreferenceMaxAggregateInputType
}

export type GetUserPreferenceAggregateType<T extends UserPreferenceAggregateArgs> = {
  [P in keyof T & keyof AggregateUserPreference]: P extends '_count' | 'count'
  ? T[P] extends true
  ? number
  : GetScalarType<T[P], AggregateUserPreference[P]>
  : GetScalarType<T[P], AggregateUserPreference[P]>
}




export type UserPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  where?: UserPreferenceWhereInput
  orderBy?: UserPreferenceOrderByWithAggregationInput | UserPreferenceOrderByWithAggregationInput[]
  by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum
  having?: UserPreferenceScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: UserPreferenceCountAggregateInputType | true
  _avg?: UserPreferenceAvgAggregateInputType
  _sum?: UserPreferenceSumAggregateInputType
  _min?: UserPreferenceMinAggregateInputType
  _max?: UserPreferenceMaxAggregateInputType
}

export type UserPreferenceGroupByOutputType = {
  id: number
  userId: number
  privacySetting: string
  notificationPreferences: JsonValue | null
  languagePreference: string
  accessibilityOptions: JsonValue | null
  createdAt: Date
  updatedAt: Date
  _count: UserPreferenceCountAggregateOutputType | null
  _avg: UserPreferenceAvgAggregateOutputType | null
  _sum: UserPreferenceSumAggregateOutputType | null
  _min: UserPreferenceMinAggregateOutputType | null
  _max: UserPreferenceMaxAggregateOutputType | null
}

type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> = Prisma.PrismaPromise<
  Array<
    PickEnumerable<UserPreferenceGroupByOutputType, T['by']> &
    {
      [P in ((keyof T) & (keyof UserPreferenceGroupByOutputType))]: P extends '_count'
      ? T[P] extends boolean
      ? number
      : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
      : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
    }
  >
>


export type UserPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
  id?: boolean
  userId?: boolean
  privacySetting?: boolean
  notificationPreferences?: boolean
  languagePreference?: boolean
  accessibilityOptions?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  user?: boolean | UserDefaultArgs<ExtArgs>
}, ExtArgs["result"]["userPreference"]>



export type UserPreferenceSelectScalar = {
  id?: boolean
  userId?: boolean
  privacySetting?: boolean
  notificationPreferences?: boolean
  languagePreference?: boolean
  accessibilityOptions?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type UserPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "privacySetting" | "notificationPreferences" | "languagePreference" | "accessibilityOptions" | "createdAt" | "updatedAt", ExtArgs["result"]["userPreference"]>
export type UserPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  user?: boolean | UserDefaultArgs<ExtArgs>
}

export type $UserPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  name: "UserPreference"
  objects: {
    user: Prisma.$UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetPayloadResult<{
    id: number
    userId: number
    privacySetting: string
    notificationPreferences: Prisma.JsonValue | null
    languagePreference: string
    accessibilityOptions: Prisma.JsonValue | null
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["userPreference"]>
  composites: {}
}

type UserPreferenceGetPayload<S extends boolean | null | undefined | UserPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencePayload, S>

type UserPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
  Omit<UserPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserPreferenceCountAggregateInputType | true
  }

export interface UserPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreference'], meta: { name: 'UserPreference' } }
  /**
   * Find zero or one UserPreference that matches the filter.
   * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
   * @example
   * // Get one UserPreference
   * const userPreference = await prisma.userPreference.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends UserPreferenceFindUniqueArgs>(args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
   * @example
   * // Get one UserPreference
   * const userPreference = await prisma.userPreference.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first UserPreference that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
   * @example
   * // Get one UserPreference
   * const userPreference = await prisma.userPreference.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends UserPreferenceFindFirstArgs>(args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first UserPreference that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
   * @example
   * // Get one UserPreference
   * const userPreference = await prisma.userPreference.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more UserPreferences that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all UserPreferences
   * const userPreferences = await prisma.userPreference.findMany()
   * 
   * // Get first 10 UserPreferences
   * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const userPreferenceWithIdOnly = await prisma.userPreference.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends UserPreferenceFindManyArgs>(args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a UserPreference.
   * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
   * @example
   * // Create one UserPreference
   * const UserPreference = await prisma.userPreference.create({
   *   data: {
   *     // ... data to create a UserPreference
   *   }
   * })
   * 
   */
  create<T extends UserPreferenceCreateArgs>(args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many UserPreferences.
   * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
   * @example
   * // Create many UserPreferences
   * const userPreference = await prisma.userPreference.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends UserPreferenceCreateManyArgs>(args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

  /**
   * Delete a UserPreference.
   * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
   * @example
   * // Delete one UserPreference
   * const UserPreference = await prisma.userPreference.delete({
   *   where: {
   *     // ... filter to delete one UserPreference
   *   }
   * })
   * 
   */
  delete<T extends UserPreferenceDeleteArgs>(args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one UserPreference.
   * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
   * @example
   * // Update one UserPreference
   * const userPreference = await prisma.userPreference.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends UserPreferenceUpdateArgs>(args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more UserPreferences.
   * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
   * @example
   * // Delete a few UserPreferences
   * const { count } = await prisma.userPreference.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends UserPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

  /**
   * Update zero or more UserPreferences.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many UserPreferences
   * const userPreference = await prisma.userPreference.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends UserPreferenceUpdateManyArgs>(args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

  /**
   * Create or update one UserPreference.
   * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
   * @example
   * // Update or create a UserPreference
   * const userPreference = await prisma.userPreference.upsert({
   *   create: {
   *     // ... data to create a UserPreference
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the UserPreference we want to update
   *   }
   * })
   */
  upsert<T extends UserPreferenceUpsertArgs>(args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of UserPreferences.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
   * @example
   * // Count the number of UserPreferences
   * const count = await prisma.userPreference.count({
   *   where: {
   *     // ... the filter for the UserPreferences we want to count
   *   }
   * })
  **/
  count<T extends UserPreferenceCountArgs>(
    args?: Subset<T, UserPreferenceCountArgs>,
  ): Prisma.PrismaPromise<
    T extends $Utils.Record<'select', any>
    ? T['select'] extends true
    ? number
    : GetScalarType<T['select'], UserPreferenceCountAggregateOutputType>
    : number
  >

  /**
   * Allows you to perform aggregations operations on a UserPreference.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
  aggregate<T extends UserPreferenceAggregateArgs>(args: Subset<T, UserPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>

  /**
   * Group by UserPreference.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {UserPreferenceGroupByArgs} args - Group by arguments.
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
    T extends UserPreferenceGroupByArgs,
    HasSelectOrTake extends Or<
      Extends<'skip', Keys<T>>,
      Extends<'take', Keys<T>>
    >,
    OrderByArg extends True extends HasSelectOrTake
    ? { orderBy: UserPreferenceGroupByArgs['orderBy'] }
    : { orderBy?: UserPreferenceGroupByArgs['orderBy'] },
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
  >(args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreference model
   */
  readonly fields: UserPreferenceFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for UserPreference.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
 * Fields of the UserPreference model
 */
interface UserPreferenceFieldRefs {
  readonly id: FieldRef<"UserPreference", 'Int'>
  readonly userId: FieldRef<"UserPreference", 'Int'>
  readonly privacySetting: FieldRef<"UserPreference", 'String'>
  readonly notificationPreferences: FieldRef<"UserPreference", 'Json'>
  readonly languagePreference: FieldRef<"UserPreference", 'String'>
  readonly accessibilityOptions: FieldRef<"UserPreference", 'Json'>
  readonly createdAt: FieldRef<"UserPreference", 'DateTime'>
  readonly updatedAt: FieldRef<"UserPreference", 'DateTime'>
}


// Custom InputTypes
/**
 * UserPreference findUnique
 */
export type UserPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the UserPreference
   */
  select?: UserPreferenceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the UserPreference
   */
  omit?: UserPreferenceOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: UserPreferenceInclude<ExtArgs> | null
  /**
   * Filter, which UserPreference to fetch.
   */
  where: UserPreferenceWhereUniqueInput
}

/**
 * UserPreference findUniqueOrThrow
 */
export type UserPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the UserPreference
   */
  select?: UserPreferenceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the UserPreference
   */
  omit?: UserPreferenceOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: UserPreferenceInclude<ExtArgs> | null
  /**
   * Filter, which UserPreference to fetch.
   */
  where: UserPreferenceWhereUniqueInput
}

/**
 * UserPreference findFirst
 */
export type UserPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the UserPreference
   */
  select?: UserPreferenceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the UserPreference
   */
  omit?: UserPreferenceOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: UserPreferenceInclude<ExtArgs> | null
  /**
   * Filter, which UserPreference to fetch.
   */
  where?: UserPreferenceWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of UserPreferences to fetch.
   */
  orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for UserPreferences.
   */
  cursor?: UserPreferenceWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` UserPreferences from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` UserPreferences.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of UserPreferences.
   */
  distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
}

/**
 * UserPreference findFirstOrThrow
 */
export type UserPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the UserPreference
   */
  select?: UserPreferenceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the UserPreference
   */
  omit?: UserPreferenceOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: UserPreferenceInclude<ExtArgs> | null
  /**
   * Filter, which UserPreference to fetch.
   */
  where?: UserPreferenceWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of UserPreferences to fetch.
   */
  orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for UserPreferences.
   */
  cursor?: UserPreferenceWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` UserPreferences from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` UserPreferences.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of UserPreferences.
   */
  distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
}

/**
 * UserPreference findMany
 */
export type UserPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the UserPreference
   */
  select?: UserPreferenceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the UserPreference
   */
  omit?: UserPreferenceOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: UserPreferenceInclude<ExtArgs> | null
  /**
   * Filter, which UserPreferences to fetch.
   */
  where?: UserPreferenceWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of UserPreferences to fetch.
   */
  orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing UserPreferences.
   */
  cursor?: UserPreferenceWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` UserPreferences from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` UserPreferences.
   */
  skip?: number
  distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
}

/**
 * UserPreference create
 */
export type UserPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the UserPreference
   */
  select?: UserPreferenceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the UserPreference
   */
  omit?: UserPreferenceOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: UserPreferenceInclude<ExtArgs> | null
  /**
   * The data needed to create a UserPreference.
   */
  data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
}

/**
 * UserPreference createMany
 */
export type UserPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * The data used to create many UserPreferences.
   */
  data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * UserPreference update
 */
export type UserPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the UserPreference
   */
  select?: UserPreferenceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the UserPreference
   */
  omit?: UserPreferenceOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: UserPreferenceInclude<ExtArgs> | null
  /**
   * The data needed to update a UserPreference.
   */
  data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
  /**
   * Choose, which UserPreference to update.
   */
  where: UserPreferenceWhereUniqueInput
}

/**
 * UserPreference updateMany
 */
export type UserPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * The data used to update UserPreferences.
   */
  data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
  /**
   * Filter which UserPreferences to update
   */
  where?: UserPreferenceWhereInput
  /**
   * Limit how many UserPreferences to update.
   */
  limit?: number
}

/**
 * UserPreference upsert
 */
export type UserPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the UserPreference
   */
  select?: UserPreferenceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the UserPreference
   */
  omit?: UserPreferenceOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: UserPreferenceInclude<ExtArgs> | null
  /**
   * The filter to search for the UserPreference to update in case it exists.
   */
  where: UserPreferenceWhereUniqueInput
  /**
   * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
   */
  create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
  /**
   * In case the UserPreference was found with the provided `where` argument, update it with this data.
   */
  update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
}

/**
 * UserPreference delete
 */
export type UserPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the UserPreference
   */
  select?: UserPreferenceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the UserPreference
   */
  omit?: UserPreferenceOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: UserPreferenceInclude<ExtArgs> | null
  /**
   * Filter which UserPreference to delete.
   */
  where: UserPreferenceWhereUniqueInput
}

/**
 * UserPreference deleteMany
 */
export type UserPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Filter which UserPreferences to delete
   */
  where?: UserPreferenceWhereInput
  /**
   * Limit how many UserPreferences to delete.
   */
  limit?: number
}

/**
 * UserPreference without action
 */
export type UserPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the UserPreference
   */
  select?: UserPreferenceSelect<ExtArgs> | null
  /**
   * Omit specific fields from the UserPreference
   */
  omit?: UserPreferenceOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: UserPreferenceInclude<ExtArgs> | null
}


/**
 * Model GardenElement
 */

export type AggregateGardenElement = {
  _count: GardenElementCountAggregateOutputType | null
  _avg: GardenElementAvgAggregateOutputType | null
  _sum: GardenElementSumAggregateOutputType | null
  _min: GardenElementMinAggregateOutputType | null
  _max: GardenElementMaxAggregateOutputType | null
}

export type GardenElementAvgAggregateOutputType = {
  id: number | null
  userId: number | null
  growthStage: number | null
  positionX: number | null
  positionY: number | null
}

export type GardenElementSumAggregateOutputType = {
  id: number | null
  userId: number | null
  growthStage: number | null
  positionX: number | null
  positionY: number | null
}

export type GardenElementMinAggregateOutputType = {
  id: number | null
  userId: number | null
  type: $Enums.GardenElementType | null
  name: string | null
  description: string | null
  plantedDate: Date | null
  lastWateredDate: Date | null
  growthStage: number | null
  healthStatus: $Enums.HealthStatus | null
  positionX: number | null
  positionY: number | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type GardenElementMaxAggregateOutputType = {
  id: number | null
  userId: number | null
  type: $Enums.GardenElementType | null
  name: string | null
  description: string | null
  plantedDate: Date | null
  lastWateredDate: Date | null
  growthStage: number | null
  healthStatus: $Enums.HealthStatus | null
  positionX: number | null
  positionY: number | null
  createdAt: Date | null
  updatedAt: Date | null
}

export type GardenElementCountAggregateOutputType = {
  id: number
  userId: number
  type: number
  name: number
  description: number
  plantedDate: number
  lastWateredDate: number
  growthStage: number
  healthStatus: number
  positionX: number
  positionY: number
  createdAt: number
  updatedAt: number
  _all: number
}


export type GardenElementAvgAggregateInputType = {
  id?: true
  userId?: true
  growthStage?: true
  positionX?: true
  positionY?: true
}

export type GardenElementSumAggregateInputType = {
  id?: true
  userId?: true
  growthStage?: true
  positionX?: true
  positionY?: true
}

export type GardenElementMinAggregateInputType = {
  id?: true
  userId?: true
  type?: true
  name?: true
  description?: true
  plantedDate?: true
  lastWateredDate?: true
  growthStage?: true
  healthStatus?: true
  positionX?: true
  positionY?: true
  createdAt?: true
  updatedAt?: true
}

export type GardenElementMaxAggregateInputType = {
  id?: true
  userId?: true
  type?: true
  name?: true
  description?: true
  plantedDate?: true
  lastWateredDate?: true
  growthStage?: true
  healthStatus?: true
  positionX?: true
  positionY?: true
  createdAt?: true
  updatedAt?: true
}

export type GardenElementCountAggregateInputType = {
  id?: true
  userId?: true
  type?: true
  name?: true
  description?: true
  plantedDate?: true
  lastWateredDate?: true
  growthStage?: true
  healthStatus?: true
  positionX?: true
  positionY?: true
  createdAt?: true
  updatedAt?: true
  _all?: true
}

export type GardenElementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Filter which GardenElement to aggregate.
   */
  where?: GardenElementWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of GardenElements to fetch.
   */
  orderBy?: GardenElementOrderByWithRelationInput | GardenElementOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the start position
   */
  cursor?: GardenElementWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` GardenElements from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` GardenElements.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Count returned GardenElements
  **/
  _count?: true | GardenElementCountAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to average
  **/
  _avg?: GardenElementAvgAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to sum
  **/
  _sum?: GardenElementSumAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the minimum value
  **/
  _min?: GardenElementMinAggregateInputType
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   * 
   * Select which fields to find the maximum value
  **/
  _max?: GardenElementMaxAggregateInputType
}

export type GetGardenElementAggregateType<T extends GardenElementAggregateArgs> = {
  [P in keyof T & keyof AggregateGardenElement]: P extends '_count' | 'count'
  ? T[P] extends true
  ? number
  : GetScalarType<T[P], AggregateGardenElement[P]>
  : GetScalarType<T[P], AggregateGardenElement[P]>
}




export type GardenElementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  where?: GardenElementWhereInput
  orderBy?: GardenElementOrderByWithAggregationInput | GardenElementOrderByWithAggregationInput[]
  by: GardenElementScalarFieldEnum[] | GardenElementScalarFieldEnum
  having?: GardenElementScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: GardenElementCountAggregateInputType | true
  _avg?: GardenElementAvgAggregateInputType
  _sum?: GardenElementSumAggregateInputType
  _min?: GardenElementMinAggregateInputType
  _max?: GardenElementMaxAggregateInputType
}

export type GardenElementGroupByOutputType = {
  id: number
  userId: number
  type: $Enums.GardenElementType
  name: string
  description: string | null
  plantedDate: Date
  lastWateredDate: Date
  growthStage: number
  healthStatus: $Enums.HealthStatus
  positionX: number
  positionY: number
  createdAt: Date
  updatedAt: Date
  _count: GardenElementCountAggregateOutputType | null
  _avg: GardenElementAvgAggregateOutputType | null
  _sum: GardenElementSumAggregateOutputType | null
  _min: GardenElementMinAggregateOutputType | null
  _max: GardenElementMaxAggregateOutputType | null
}

type GetGardenElementGroupByPayload<T extends GardenElementGroupByArgs> = Prisma.PrismaPromise<
  Array<
    PickEnumerable<GardenElementGroupByOutputType, T['by']> &
    {
      [P in ((keyof T) & (keyof GardenElementGroupByOutputType))]: P extends '_count'
      ? T[P] extends boolean
      ? number
      : GetScalarType<T[P], GardenElementGroupByOutputType[P]>
      : GetScalarType<T[P], GardenElementGroupByOutputType[P]>
    }
  >
>


export type GardenElementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
  id?: boolean
  userId?: boolean
  type?: boolean
  name?: boolean
  description?: boolean
  plantedDate?: boolean
  lastWateredDate?: boolean
  growthStage?: boolean
  healthStatus?: boolean
  positionX?: boolean
  positionY?: boolean
  createdAt?: boolean
  updatedAt?: boolean
  user?: boolean | UserDefaultArgs<ExtArgs>
}, ExtArgs["result"]["gardenElement"]>



export type GardenElementSelectScalar = {
  id?: boolean
  userId?: boolean
  type?: boolean
  name?: boolean
  description?: boolean
  plantedDate?: boolean
  lastWateredDate?: boolean
  growthStage?: boolean
  healthStatus?: boolean
  positionX?: boolean
  positionY?: boolean
  createdAt?: boolean
  updatedAt?: boolean
}

export type GardenElementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "name" | "description" | "plantedDate" | "lastWateredDate" | "growthStage" | "healthStatus" | "positionX" | "positionY" | "createdAt" | "updatedAt", ExtArgs["result"]["gardenElement"]>
export type GardenElementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  user?: boolean | UserDefaultArgs<ExtArgs>
}

export type $GardenElementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  name: "GardenElement"
  objects: {
    user: Prisma.$UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetPayloadResult<{
    id: number
    userId: number
    type: $Enums.GardenElementType
    name: string
    description: string | null
    plantedDate: Date
    lastWateredDate: Date
    growthStage: number
    healthStatus: $Enums.HealthStatus
    positionX: number
    positionY: number
    createdAt: Date
    updatedAt: Date
  }, ExtArgs["result"]["gardenElement"]>
  composites: {}
}

type GardenElementGetPayload<S extends boolean | null | undefined | GardenElementDefaultArgs> = $Result.GetResult<Prisma.$GardenElementPayload, S>

type GardenElementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
  Omit<GardenElementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GardenElementCountAggregateInputType | true
  }

export interface GardenElementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GardenElement'], meta: { name: 'GardenElement' } }
  /**
   * Find zero or one GardenElement that matches the filter.
   * @param {GardenElementFindUniqueArgs} args - Arguments to find a GardenElement
   * @example
   * // Get one GardenElement
   * const gardenElement = await prisma.gardenElement.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends GardenElementFindUniqueArgs>(args: SelectSubset<T, GardenElementFindUniqueArgs<ExtArgs>>): Prisma__GardenElementClient<$Result.GetResult<Prisma.$GardenElementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find one GardenElement that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {GardenElementFindUniqueOrThrowArgs} args - Arguments to find a GardenElement
   * @example
   * // Get one GardenElement
   * const gardenElement = await prisma.gardenElement.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends GardenElementFindUniqueOrThrowArgs>(args: SelectSubset<T, GardenElementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GardenElementClient<$Result.GetResult<Prisma.$GardenElementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first GardenElement that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {GardenElementFindFirstArgs} args - Arguments to find a GardenElement
   * @example
   * // Get one GardenElement
   * const gardenElement = await prisma.gardenElement.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends GardenElementFindFirstArgs>(args?: SelectSubset<T, GardenElementFindFirstArgs<ExtArgs>>): Prisma__GardenElementClient<$Result.GetResult<Prisma.$GardenElementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

  /**
   * Find the first GardenElement that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {GardenElementFindFirstOrThrowArgs} args - Arguments to find a GardenElement
   * @example
   * // Get one GardenElement
   * const gardenElement = await prisma.gardenElement.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends GardenElementFindFirstOrThrowArgs>(args?: SelectSubset<T, GardenElementFindFirstOrThrowArgs<ExtArgs>>): Prisma__GardenElementClient<$Result.GetResult<Prisma.$GardenElementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Find zero or more GardenElements that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {GardenElementFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all GardenElements
   * const gardenElements = await prisma.gardenElement.findMany()
   * 
   * // Get first 10 GardenElements
   * const gardenElements = await prisma.gardenElement.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const gardenElementWithIdOnly = await prisma.gardenElement.findMany({ select: { id: true } })
   * 
   */
  findMany<T extends GardenElementFindManyArgs>(args?: SelectSubset<T, GardenElementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GardenElementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

  /**
   * Create a GardenElement.
   * @param {GardenElementCreateArgs} args - Arguments to create a GardenElement.
   * @example
   * // Create one GardenElement
   * const GardenElement = await prisma.gardenElement.create({
   *   data: {
   *     // ... data to create a GardenElement
   *   }
   * })
   * 
   */
  create<T extends GardenElementCreateArgs>(args: SelectSubset<T, GardenElementCreateArgs<ExtArgs>>): Prisma__GardenElementClient<$Result.GetResult<Prisma.$GardenElementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Create many GardenElements.
   * @param {GardenElementCreateManyArgs} args - Arguments to create many GardenElements.
   * @example
   * // Create many GardenElements
   * const gardenElement = await prisma.gardenElement.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *     
   */
  createMany<T extends GardenElementCreateManyArgs>(args?: SelectSubset<T, GardenElementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

  /**
   * Delete a GardenElement.
   * @param {GardenElementDeleteArgs} args - Arguments to delete one GardenElement.
   * @example
   * // Delete one GardenElement
   * const GardenElement = await prisma.gardenElement.delete({
   *   where: {
   *     // ... filter to delete one GardenElement
   *   }
   * })
   * 
   */
  delete<T extends GardenElementDeleteArgs>(args: SelectSubset<T, GardenElementDeleteArgs<ExtArgs>>): Prisma__GardenElementClient<$Result.GetResult<Prisma.$GardenElementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Update one GardenElement.
   * @param {GardenElementUpdateArgs} args - Arguments to update one GardenElement.
   * @example
   * // Update one GardenElement
   * const gardenElement = await prisma.gardenElement.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  update<T extends GardenElementUpdateArgs>(args: SelectSubset<T, GardenElementUpdateArgs<ExtArgs>>): Prisma__GardenElementClient<$Result.GetResult<Prisma.$GardenElementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

  /**
   * Delete zero or more GardenElements.
   * @param {GardenElementDeleteManyArgs} args - Arguments to filter GardenElements to delete.
   * @example
   * // Delete a few GardenElements
   * const { count } = await prisma.gardenElement.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
   */
  deleteMany<T extends GardenElementDeleteManyArgs>(args?: SelectSubset<T, GardenElementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

  /**
   * Update zero or more GardenElements.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {GardenElementUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many GardenElements
   * const gardenElement = await prisma.gardenElement.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
   */
  updateMany<T extends GardenElementUpdateManyArgs>(args: SelectSubset<T, GardenElementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

  /**
   * Create or update one GardenElement.
   * @param {GardenElementUpsertArgs} args - Arguments to update or create a GardenElement.
   * @example
   * // Update or create a GardenElement
   * const gardenElement = await prisma.gardenElement.upsert({
   *   create: {
   *     // ... data to create a GardenElement
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the GardenElement we want to update
   *   }
   * })
   */
  upsert<T extends GardenElementUpsertArgs>(args: SelectSubset<T, GardenElementUpsertArgs<ExtArgs>>): Prisma__GardenElementClient<$Result.GetResult<Prisma.$GardenElementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


  /**
   * Count the number of GardenElements.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {GardenElementCountArgs} args - Arguments to filter GardenElements to count.
   * @example
   * // Count the number of GardenElements
   * const count = await prisma.gardenElement.count({
   *   where: {
   *     // ... the filter for the GardenElements we want to count
   *   }
   * })
  **/
  count<T extends GardenElementCountArgs>(
    args?: Subset<T, GardenElementCountArgs>,
  ): Prisma.PrismaPromise<
    T extends $Utils.Record<'select', any>
    ? T['select'] extends true
    ? number
    : GetScalarType<T['select'], GardenElementCountAggregateOutputType>
    : number
  >

  /**
   * Allows you to perform aggregations operations on a GardenElement.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {GardenElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
  aggregate<T extends GardenElementAggregateArgs>(args: Subset<T, GardenElementAggregateArgs>): Prisma.PrismaPromise<GetGardenElementAggregateType<T>>

  /**
   * Group by GardenElement.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {GardenElementGroupByArgs} args - Group by arguments.
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
    T extends GardenElementGroupByArgs,
    HasSelectOrTake extends Or<
      Extends<'skip', Keys<T>>,
      Extends<'take', Keys<T>>
    >,
    OrderByArg extends True extends HasSelectOrTake
    ? { orderBy: GardenElementGroupByArgs['orderBy'] }
    : { orderBy?: GardenElementGroupByArgs['orderBy'] },
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
  >(args: SubsetIntersection<T, GardenElementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGardenElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GardenElement model
   */
  readonly fields: GardenElementFieldRefs;
}

/**
 * The delegate class that acts as a "Promise-like" for GardenElement.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__GardenElementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
 * Fields of the GardenElement model
 */
interface GardenElementFieldRefs {
  readonly id: FieldRef<"GardenElement", 'Int'>
  readonly userId: FieldRef<"GardenElement", 'Int'>
  readonly type: FieldRef<"GardenElement", 'GardenElementType'>
  readonly name: FieldRef<"GardenElement", 'String'>
  readonly description: FieldRef<"GardenElement", 'String'>
  readonly plantedDate: FieldRef<"GardenElement", 'DateTime'>
  readonly lastWateredDate: FieldRef<"GardenElement", 'DateTime'>
  readonly growthStage: FieldRef<"GardenElement", 'Int'>
  readonly healthStatus: FieldRef<"GardenElement", 'HealthStatus'>
  readonly positionX: FieldRef<"GardenElement", 'Int'>
  readonly positionY: FieldRef<"GardenElement", 'Int'>
  readonly createdAt: FieldRef<"GardenElement", 'DateTime'>
  readonly updatedAt: FieldRef<"GardenElement", 'DateTime'>
}


// Custom InputTypes
/**
 * GardenElement findUnique
 */
export type GardenElementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the GardenElement
   */
  select?: GardenElementSelect<ExtArgs> | null
  /**
   * Omit specific fields from the GardenElement
   */
  omit?: GardenElementOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: GardenElementInclude<ExtArgs> | null
  /**
   * Filter, which GardenElement to fetch.
   */
  where: GardenElementWhereUniqueInput
}

/**
 * GardenElement findUniqueOrThrow
 */
export type GardenElementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the GardenElement
   */
  select?: GardenElementSelect<ExtArgs> | null
  /**
   * Omit specific fields from the GardenElement
   */
  omit?: GardenElementOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: GardenElementInclude<ExtArgs> | null
  /**
   * Filter, which GardenElement to fetch.
   */
  where: GardenElementWhereUniqueInput
}

/**
 * GardenElement findFirst
 */
export type GardenElementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the GardenElement
   */
  select?: GardenElementSelect<ExtArgs> | null
  /**
   * Omit specific fields from the GardenElement
   */
  omit?: GardenElementOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: GardenElementInclude<ExtArgs> | null
  /**
   * Filter, which GardenElement to fetch.
   */
  where?: GardenElementWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of GardenElements to fetch.
   */
  orderBy?: GardenElementOrderByWithRelationInput | GardenElementOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for GardenElements.
   */
  cursor?: GardenElementWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` GardenElements from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` GardenElements.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of GardenElements.
   */
  distinct?: GardenElementScalarFieldEnum | GardenElementScalarFieldEnum[]
}

/**
 * GardenElement findFirstOrThrow
 */
export type GardenElementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the GardenElement
   */
  select?: GardenElementSelect<ExtArgs> | null
  /**
   * Omit specific fields from the GardenElement
   */
  omit?: GardenElementOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: GardenElementInclude<ExtArgs> | null
  /**
   * Filter, which GardenElement to fetch.
   */
  where?: GardenElementWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of GardenElements to fetch.
   */
  orderBy?: GardenElementOrderByWithRelationInput | GardenElementOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for searching for GardenElements.
   */
  cursor?: GardenElementWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` GardenElements from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` GardenElements.
   */
  skip?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   * 
   * Filter by unique combinations of GardenElements.
   */
  distinct?: GardenElementScalarFieldEnum | GardenElementScalarFieldEnum[]
}

/**
 * GardenElement findMany
 */
export type GardenElementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the GardenElement
   */
  select?: GardenElementSelect<ExtArgs> | null
  /**
   * Omit specific fields from the GardenElement
   */
  omit?: GardenElementOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: GardenElementInclude<ExtArgs> | null
  /**
   * Filter, which GardenElements to fetch.
   */
  where?: GardenElementWhereInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   * 
   * Determine the order of GardenElements to fetch.
   */
  orderBy?: GardenElementOrderByWithRelationInput | GardenElementOrderByWithRelationInput[]
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   * 
   * Sets the position for listing GardenElements.
   */
  cursor?: GardenElementWhereUniqueInput
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Take `±n` GardenElements from the position of the cursor.
   */
  take?: number
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   * 
   * Skip the first `n` GardenElements.
   */
  skip?: number
  distinct?: GardenElementScalarFieldEnum | GardenElementScalarFieldEnum[]
}

/**
 * GardenElement create
 */
export type GardenElementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the GardenElement
   */
  select?: GardenElementSelect<ExtArgs> | null
  /**
   * Omit specific fields from the GardenElement
   */
  omit?: GardenElementOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: GardenElementInclude<ExtArgs> | null
  /**
   * The data needed to create a GardenElement.
   */
  data: XOR<GardenElementCreateInput, GardenElementUncheckedCreateInput>
}

/**
 * GardenElement createMany
 */
export type GardenElementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * The data used to create many GardenElements.
   */
  data: GardenElementCreateManyInput | GardenElementCreateManyInput[]
  skipDuplicates?: boolean
}

/**
 * GardenElement update
 */
export type GardenElementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the GardenElement
   */
  select?: GardenElementSelect<ExtArgs> | null
  /**
   * Omit specific fields from the GardenElement
   */
  omit?: GardenElementOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: GardenElementInclude<ExtArgs> | null
  /**
   * The data needed to update a GardenElement.
   */
  data: XOR<GardenElementUpdateInput, GardenElementUncheckedUpdateInput>
  /**
   * Choose, which GardenElement to update.
   */
  where: GardenElementWhereUniqueInput
}

/**
 * GardenElement updateMany
 */
export type GardenElementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * The data used to update GardenElements.
   */
  data: XOR<GardenElementUpdateManyMutationInput, GardenElementUncheckedUpdateManyInput>
  /**
   * Filter which GardenElements to update
   */
  where?: GardenElementWhereInput
  /**
   * Limit how many GardenElements to update.
   */
  limit?: number
}

/**
 * GardenElement upsert
 */
export type GardenElementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the GardenElement
   */
  select?: GardenElementSelect<ExtArgs> | null
  /**
   * Omit specific fields from the GardenElement
   */
  omit?: GardenElementOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: GardenElementInclude<ExtArgs> | null
  /**
   * The filter to search for the GardenElement to update in case it exists.
   */
  where: GardenElementWhereUniqueInput
  /**
   * In case the GardenElement found by the `where` argument doesn't exist, create a new GardenElement with this data.
   */
  create: XOR<GardenElementCreateInput, GardenElementUncheckedCreateInput>
  /**
   * In case the GardenElement was found with the provided `where` argument, update it with this data.
   */
  update: XOR<GardenElementUpdateInput, GardenElementUncheckedUpdateInput>
}

/**
 * GardenElement delete
 */
export type GardenElementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the GardenElement
   */
  select?: GardenElementSelect<ExtArgs> | null
  /**
   * Omit specific fields from the GardenElement
   */
  omit?: GardenElementOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: GardenElementInclude<ExtArgs> | null
  /**
   * Filter which GardenElement to delete.
   */
  where: GardenElementWhereUniqueInput
}

/**
 * GardenElement deleteMany
 */
export type GardenElementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Filter which GardenElements to delete
   */
  where?: GardenElementWhereInput
  /**
   * Limit how many GardenElements to delete.
   */
  limit?: number
}

/**
 * GardenElement without action
 */
export type GardenElementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
  /**
   * Select specific fields to fetch from the GardenElement
   */
  select?: GardenElementSelect<ExtArgs> | null
  /**
   * Omit specific fields from the GardenElement
   */
  omit?: GardenElementOmit<ExtArgs> | null
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: GardenElementInclude<ExtArgs> | null
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


export const UserScalarFieldEnum: {
  id: 'id',
  email: 'email',
  name: 'name',
  passwordHash: 'passwordHash',
  isEmailVerified: 'isEmailVerified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


export const MentalHealthMetricScalarFieldEnum: {
  id: 'id',
  userId: 'userId',
  metricDate: 'metricDate',
  mood: 'mood',
  anxietyLevel: 'anxietyLevel',
  stressLevel: 'stressLevel',
  notes: 'notes',
  activities: 'activities',
  createdAt: 'createdAt'
};

export type MentalHealthMetricScalarFieldEnum = (typeof MentalHealthMetricScalarFieldEnum)[keyof typeof MentalHealthMetricScalarFieldEnum]


export const ForumCategoryScalarFieldEnum: {
  id: 'id',
  name: 'name'
};

export type ForumCategoryScalarFieldEnum = (typeof ForumCategoryScalarFieldEnum)[keyof typeof ForumCategoryScalarFieldEnum]


export const ForumPostScalarFieldEnum: {
  id: 'id',
  userId: 'userId',
  categoryId: 'categoryId',
  title: 'title',
  content: 'content',
  isAnonymous: 'isAnonymous',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export type ForumPostScalarFieldEnum = (typeof ForumPostScalarFieldEnum)[keyof typeof ForumPostScalarFieldEnum]


export const ForumCommentScalarFieldEnum: {
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  content: 'content',
  isAnonymous: 'isAnonymous',
  createdAt: 'createdAt'
};

export type ForumCommentScalarFieldEnum = (typeof ForumCommentScalarFieldEnum)[keyof typeof ForumCommentScalarFieldEnum]


export const ResourceScalarFieldEnum: {
  id: 'id',
  title: 'title',
  type: 'type',
  content: 'content',
  url: 'url',
  createdAt: 'createdAt'
};

export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


export const UserPreferenceScalarFieldEnum: {
  id: 'id',
  userId: 'userId',
  privacySetting: 'privacySetting',
  notificationPreferences: 'notificationPreferences',
  languagePreference: 'languagePreference',
  accessibilityOptions: 'accessibilityOptions',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export type UserPreferenceScalarFieldEnum = (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum]


export const GardenElementScalarFieldEnum: {
  id: 'id',
  userId: 'userId',
  type: 'type',
  name: 'name',
  description: 'description',
  plantedDate: 'plantedDate',
  lastWateredDate: 'lastWateredDate',
  growthStage: 'growthStage',
  healthStatus: 'healthStatus',
  positionX: 'positionX',
  positionY: 'positionY',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

export type GardenElementScalarFieldEnum = (typeof GardenElementScalarFieldEnum)[keyof typeof GardenElementScalarFieldEnum]


export const SortOrder: {
  asc: 'asc',
  desc: 'desc'
};

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


export const NullableJsonNullValueInput: {
  DbNull: typeof DbNull,
  JsonNull: typeof JsonNull
};

export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


export const UserOrderByRelevanceFieldEnum: {
  email: 'email',
  name: 'name',
  passwordHash: 'passwordHash'
};

export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


export const JsonNullValueFilter: {
  DbNull: typeof DbNull,
  JsonNull: typeof JsonNull,
  AnyNull: typeof AnyNull
};

export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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


export const MentalHealthMetricOrderByRelevanceFieldEnum: {
  notes: 'notes'
};

export type MentalHealthMetricOrderByRelevanceFieldEnum = (typeof MentalHealthMetricOrderByRelevanceFieldEnum)[keyof typeof MentalHealthMetricOrderByRelevanceFieldEnum]


export const ForumCategoryOrderByRelevanceFieldEnum: {
  name: 'name'
};

export type ForumCategoryOrderByRelevanceFieldEnum = (typeof ForumCategoryOrderByRelevanceFieldEnum)[keyof typeof ForumCategoryOrderByRelevanceFieldEnum]


export const ForumPostOrderByRelevanceFieldEnum: {
  title: 'title',
  content: 'content'
};

export type ForumPostOrderByRelevanceFieldEnum = (typeof ForumPostOrderByRelevanceFieldEnum)[keyof typeof ForumPostOrderByRelevanceFieldEnum]


export const ForumCommentOrderByRelevanceFieldEnum: {
  content: 'content'
};

export type ForumCommentOrderByRelevanceFieldEnum = (typeof ForumCommentOrderByRelevanceFieldEnum)[keyof typeof ForumCommentOrderByRelevanceFieldEnum]


export const ResourceOrderByRelevanceFieldEnum: {
  title: 'title',
  type: 'type',
  content: 'content',
  url: 'url'
};

export type ResourceOrderByRelevanceFieldEnum = (typeof ResourceOrderByRelevanceFieldEnum)[keyof typeof ResourceOrderByRelevanceFieldEnum]


export const UserPreferenceOrderByRelevanceFieldEnum: {
  privacySetting: 'privacySetting',
  languagePreference: 'languagePreference'
};

export type UserPreferenceOrderByRelevanceFieldEnum = (typeof UserPreferenceOrderByRelevanceFieldEnum)[keyof typeof UserPreferenceOrderByRelevanceFieldEnum]


export const GardenElementOrderByRelevanceFieldEnum: {
  name: 'name',
  description: 'description'
};

export type GardenElementOrderByRelevanceFieldEnum = (typeof GardenElementOrderByRelevanceFieldEnum)[keyof typeof GardenElementOrderByRelevanceFieldEnum]


/**
 * Field references
 */


/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>



/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>



/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>



/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>



/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>



/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>



/**
 * Reference to a field of type 'GardenElementType'
 */
export type EnumGardenElementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GardenElementType'>



/**
 * Reference to a field of type 'HealthStatus'
 */
export type EnumHealthStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HealthStatus'>



/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>

/**
 * Deep Input Types
 */


export type UserWhereInput = {
  AND?: UserWhereInput | UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput | UserWhereInput[]
  id?: IntFilter<"User"> | number
  email?: StringFilter<"User"> | string
  name?: StringFilter<"User"> | string
  passwordHash?: StringFilter<"User"> | string
  isEmailVerified?: BoolFilter<"User"> | boolean
  createdAt?: DateTimeFilter<"User"> | Date | string
  updatedAt?: DateTimeFilter<"User"> | Date | string
  mentalHealthMetrics?: MentalHealthMetricListRelationFilter
  forumPosts?: ForumPostListRelationFilter
  forumComments?: ForumCommentListRelationFilter
  preferences?: XOR<UserPreferenceNullableScalarRelationFilter, UserPreferenceWhereInput> | null
  gardenElements?: GardenElementListRelationFilter
}

export type UserOrderByWithRelationInput = {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  passwordHash?: SortOrder
  isEmailVerified?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  mentalHealthMetrics?: MentalHealthMetricOrderByRelationAggregateInput
  forumPosts?: ForumPostOrderByRelationAggregateInput
  forumComments?: ForumCommentOrderByRelationAggregateInput
  preferences?: UserPreferenceOrderByWithRelationInput
  gardenElements?: GardenElementOrderByRelationAggregateInput
  _relevance?: UserOrderByRelevanceInput
}

export type UserWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  email?: string
  AND?: UserWhereInput | UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput | UserWhereInput[]
  name?: StringFilter<"User"> | string
  passwordHash?: StringFilter<"User"> | string
  isEmailVerified?: BoolFilter<"User"> | boolean
  createdAt?: DateTimeFilter<"User"> | Date | string
  updatedAt?: DateTimeFilter<"User"> | Date | string
  mentalHealthMetrics?: MentalHealthMetricListRelationFilter
  forumPosts?: ForumPostListRelationFilter
  forumComments?: ForumCommentListRelationFilter
  preferences?: XOR<UserPreferenceNullableScalarRelationFilter, UserPreferenceWhereInput> | null
  gardenElements?: GardenElementListRelationFilter
}, "id" | "email">

export type UserOrderByWithAggregationInput = {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  passwordHash?: SortOrder
  isEmailVerified?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: UserCountOrderByAggregateInput
  _avg?: UserAvgOrderByAggregateInput
  _max?: UserMaxOrderByAggregateInput
  _min?: UserMinOrderByAggregateInput
  _sum?: UserSumOrderByAggregateInput
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter<"User"> | number
  email?: StringWithAggregatesFilter<"User"> | string
  name?: StringWithAggregatesFilter<"User"> | string
  passwordHash?: StringWithAggregatesFilter<"User"> | string
  isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
  createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
}

export type MentalHealthMetricWhereInput = {
  AND?: MentalHealthMetricWhereInput | MentalHealthMetricWhereInput[]
  OR?: MentalHealthMetricWhereInput[]
  NOT?: MentalHealthMetricWhereInput | MentalHealthMetricWhereInput[]
  id?: IntFilter<"MentalHealthMetric"> | number
  userId?: IntFilter<"MentalHealthMetric"> | number
  metricDate?: DateTimeFilter<"MentalHealthMetric"> | Date | string
  mood?: IntFilter<"MentalHealthMetric"> | number
  anxietyLevel?: IntNullableFilter<"MentalHealthMetric"> | number | null
  stressLevel?: IntNullableFilter<"MentalHealthMetric"> | number | null
  notes?: StringNullableFilter<"MentalHealthMetric"> | string | null
  activities?: JsonNullableFilter<"MentalHealthMetric">
  createdAt?: DateTimeFilter<"MentalHealthMetric"> | Date | string
  user?: XOR<UserScalarRelationFilter, UserWhereInput>
}

export type MentalHealthMetricOrderByWithRelationInput = {
  id?: SortOrder
  userId?: SortOrder
  metricDate?: SortOrder
  mood?: SortOrder
  anxietyLevel?: SortOrderInput | SortOrder
  stressLevel?: SortOrderInput | SortOrder
  notes?: SortOrderInput | SortOrder
  activities?: SortOrderInput | SortOrder
  createdAt?: SortOrder
  user?: UserOrderByWithRelationInput
  _relevance?: MentalHealthMetricOrderByRelevanceInput
}

export type MentalHealthMetricWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: MentalHealthMetricWhereInput | MentalHealthMetricWhereInput[]
  OR?: MentalHealthMetricWhereInput[]
  NOT?: MentalHealthMetricWhereInput | MentalHealthMetricWhereInput[]
  userId?: IntFilter<"MentalHealthMetric"> | number
  metricDate?: DateTimeFilter<"MentalHealthMetric"> | Date | string
  mood?: IntFilter<"MentalHealthMetric"> | number
  anxietyLevel?: IntNullableFilter<"MentalHealthMetric"> | number | null
  stressLevel?: IntNullableFilter<"MentalHealthMetric"> | number | null
  notes?: StringNullableFilter<"MentalHealthMetric"> | string | null
  activities?: JsonNullableFilter<"MentalHealthMetric">
  createdAt?: DateTimeFilter<"MentalHealthMetric"> | Date | string
  user?: XOR<UserScalarRelationFilter, UserWhereInput>
}, "id">

export type MentalHealthMetricOrderByWithAggregationInput = {
  id?: SortOrder
  userId?: SortOrder
  metricDate?: SortOrder
  mood?: SortOrder
  anxietyLevel?: SortOrderInput | SortOrder
  stressLevel?: SortOrderInput | SortOrder
  notes?: SortOrderInput | SortOrder
  activities?: SortOrderInput | SortOrder
  createdAt?: SortOrder
  _count?: MentalHealthMetricCountOrderByAggregateInput
  _avg?: MentalHealthMetricAvgOrderByAggregateInput
  _max?: MentalHealthMetricMaxOrderByAggregateInput
  _min?: MentalHealthMetricMinOrderByAggregateInput
  _sum?: MentalHealthMetricSumOrderByAggregateInput
}

export type MentalHealthMetricScalarWhereWithAggregatesInput = {
  AND?: MentalHealthMetricScalarWhereWithAggregatesInput | MentalHealthMetricScalarWhereWithAggregatesInput[]
  OR?: MentalHealthMetricScalarWhereWithAggregatesInput[]
  NOT?: MentalHealthMetricScalarWhereWithAggregatesInput | MentalHealthMetricScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter<"MentalHealthMetric"> | number
  userId?: IntWithAggregatesFilter<"MentalHealthMetric"> | number
  metricDate?: DateTimeWithAggregatesFilter<"MentalHealthMetric"> | Date | string
  mood?: IntWithAggregatesFilter<"MentalHealthMetric"> | number
  anxietyLevel?: IntNullableWithAggregatesFilter<"MentalHealthMetric"> | number | null
  stressLevel?: IntNullableWithAggregatesFilter<"MentalHealthMetric"> | number | null
  notes?: StringNullableWithAggregatesFilter<"MentalHealthMetric"> | string | null
  activities?: JsonNullableWithAggregatesFilter<"MentalHealthMetric">
  createdAt?: DateTimeWithAggregatesFilter<"MentalHealthMetric"> | Date | string
}

export type ForumCategoryWhereInput = {
  AND?: ForumCategoryWhereInput | ForumCategoryWhereInput[]
  OR?: ForumCategoryWhereInput[]
  NOT?: ForumCategoryWhereInput | ForumCategoryWhereInput[]
  id?: IntFilter<"ForumCategory"> | number
  name?: StringFilter<"ForumCategory"> | string
  posts?: ForumPostListRelationFilter
}

export type ForumCategoryOrderByWithRelationInput = {
  id?: SortOrder
  name?: SortOrder
  posts?: ForumPostOrderByRelationAggregateInput
  _relevance?: ForumCategoryOrderByRelevanceInput
}

export type ForumCategoryWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  name?: string
  AND?: ForumCategoryWhereInput | ForumCategoryWhereInput[]
  OR?: ForumCategoryWhereInput[]
  NOT?: ForumCategoryWhereInput | ForumCategoryWhereInput[]
  posts?: ForumPostListRelationFilter
}, "id" | "name">

export type ForumCategoryOrderByWithAggregationInput = {
  id?: SortOrder
  name?: SortOrder
  _count?: ForumCategoryCountOrderByAggregateInput
  _avg?: ForumCategoryAvgOrderByAggregateInput
  _max?: ForumCategoryMaxOrderByAggregateInput
  _min?: ForumCategoryMinOrderByAggregateInput
  _sum?: ForumCategorySumOrderByAggregateInput
}

export type ForumCategoryScalarWhereWithAggregatesInput = {
  AND?: ForumCategoryScalarWhereWithAggregatesInput | ForumCategoryScalarWhereWithAggregatesInput[]
  OR?: ForumCategoryScalarWhereWithAggregatesInput[]
  NOT?: ForumCategoryScalarWhereWithAggregatesInput | ForumCategoryScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter<"ForumCategory"> | number
  name?: StringWithAggregatesFilter<"ForumCategory"> | string
}

export type ForumPostWhereInput = {
  AND?: ForumPostWhereInput | ForumPostWhereInput[]
  OR?: ForumPostWhereInput[]
  NOT?: ForumPostWhereInput | ForumPostWhereInput[]
  id?: IntFilter<"ForumPost"> | number
  userId?: IntNullableFilter<"ForumPost"> | number | null
  categoryId?: IntNullableFilter<"ForumPost"> | number | null
  title?: StringFilter<"ForumPost"> | string
  content?: StringFilter<"ForumPost"> | string
  isAnonymous?: BoolFilter<"ForumPost"> | boolean
  createdAt?: DateTimeFilter<"ForumPost"> | Date | string
  updatedAt?: DateTimeFilter<"ForumPost"> | Date | string
  user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  category?: XOR<ForumCategoryNullableScalarRelationFilter, ForumCategoryWhereInput> | null
  comments?: ForumCommentListRelationFilter
}

export type ForumPostOrderByWithRelationInput = {
  id?: SortOrder
  userId?: SortOrderInput | SortOrder
  categoryId?: SortOrderInput | SortOrder
  title?: SortOrder
  content?: SortOrder
  isAnonymous?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  user?: UserOrderByWithRelationInput
  category?: ForumCategoryOrderByWithRelationInput
  comments?: ForumCommentOrderByRelationAggregateInput
  _relevance?: ForumPostOrderByRelevanceInput
}

export type ForumPostWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: ForumPostWhereInput | ForumPostWhereInput[]
  OR?: ForumPostWhereInput[]
  NOT?: ForumPostWhereInput | ForumPostWhereInput[]
  userId?: IntNullableFilter<"ForumPost"> | number | null
  categoryId?: IntNullableFilter<"ForumPost"> | number | null
  title?: StringFilter<"ForumPost"> | string
  content?: StringFilter<"ForumPost"> | string
  isAnonymous?: BoolFilter<"ForumPost"> | boolean
  createdAt?: DateTimeFilter<"ForumPost"> | Date | string
  updatedAt?: DateTimeFilter<"ForumPost"> | Date | string
  user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  category?: XOR<ForumCategoryNullableScalarRelationFilter, ForumCategoryWhereInput> | null
  comments?: ForumCommentListRelationFilter
}, "id">

export type ForumPostOrderByWithAggregationInput = {
  id?: SortOrder
  userId?: SortOrderInput | SortOrder
  categoryId?: SortOrderInput | SortOrder
  title?: SortOrder
  content?: SortOrder
  isAnonymous?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: ForumPostCountOrderByAggregateInput
  _avg?: ForumPostAvgOrderByAggregateInput
  _max?: ForumPostMaxOrderByAggregateInput
  _min?: ForumPostMinOrderByAggregateInput
  _sum?: ForumPostSumOrderByAggregateInput
}

export type ForumPostScalarWhereWithAggregatesInput = {
  AND?: ForumPostScalarWhereWithAggregatesInput | ForumPostScalarWhereWithAggregatesInput[]
  OR?: ForumPostScalarWhereWithAggregatesInput[]
  NOT?: ForumPostScalarWhereWithAggregatesInput | ForumPostScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter<"ForumPost"> | number
  userId?: IntNullableWithAggregatesFilter<"ForumPost"> | number | null
  categoryId?: IntNullableWithAggregatesFilter<"ForumPost"> | number | null
  title?: StringWithAggregatesFilter<"ForumPost"> | string
  content?: StringWithAggregatesFilter<"ForumPost"> | string
  isAnonymous?: BoolWithAggregatesFilter<"ForumPost"> | boolean
  createdAt?: DateTimeWithAggregatesFilter<"ForumPost"> | Date | string
  updatedAt?: DateTimeWithAggregatesFilter<"ForumPost"> | Date | string
}

export type ForumCommentWhereInput = {
  AND?: ForumCommentWhereInput | ForumCommentWhereInput[]
  OR?: ForumCommentWhereInput[]
  NOT?: ForumCommentWhereInput | ForumCommentWhereInput[]
  id?: IntFilter<"ForumComment"> | number
  postId?: IntFilter<"ForumComment"> | number
  userId?: IntNullableFilter<"ForumComment"> | number | null
  content?: StringFilter<"ForumComment"> | string
  isAnonymous?: BoolFilter<"ForumComment"> | boolean
  createdAt?: DateTimeFilter<"ForumComment"> | Date | string
  post?: XOR<ForumPostScalarRelationFilter, ForumPostWhereInput>
  user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
}

export type ForumCommentOrderByWithRelationInput = {
  id?: SortOrder
  postId?: SortOrder
  userId?: SortOrderInput | SortOrder
  content?: SortOrder
  isAnonymous?: SortOrder
  createdAt?: SortOrder
  post?: ForumPostOrderByWithRelationInput
  user?: UserOrderByWithRelationInput
  _relevance?: ForumCommentOrderByRelevanceInput
}

export type ForumCommentWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: ForumCommentWhereInput | ForumCommentWhereInput[]
  OR?: ForumCommentWhereInput[]
  NOT?: ForumCommentWhereInput | ForumCommentWhereInput[]
  postId?: IntFilter<"ForumComment"> | number
  userId?: IntNullableFilter<"ForumComment"> | number | null
  content?: StringFilter<"ForumComment"> | string
  isAnonymous?: BoolFilter<"ForumComment"> | boolean
  createdAt?: DateTimeFilter<"ForumComment"> | Date | string
  post?: XOR<ForumPostScalarRelationFilter, ForumPostWhereInput>
  user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
}, "id">

export type ForumCommentOrderByWithAggregationInput = {
  id?: SortOrder
  postId?: SortOrder
  userId?: SortOrderInput | SortOrder
  content?: SortOrder
  isAnonymous?: SortOrder
  createdAt?: SortOrder
  _count?: ForumCommentCountOrderByAggregateInput
  _avg?: ForumCommentAvgOrderByAggregateInput
  _max?: ForumCommentMaxOrderByAggregateInput
  _min?: ForumCommentMinOrderByAggregateInput
  _sum?: ForumCommentSumOrderByAggregateInput
}

export type ForumCommentScalarWhereWithAggregatesInput = {
  AND?: ForumCommentScalarWhereWithAggregatesInput | ForumCommentScalarWhereWithAggregatesInput[]
  OR?: ForumCommentScalarWhereWithAggregatesInput[]
  NOT?: ForumCommentScalarWhereWithAggregatesInput | ForumCommentScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter<"ForumComment"> | number
  postId?: IntWithAggregatesFilter<"ForumComment"> | number
  userId?: IntNullableWithAggregatesFilter<"ForumComment"> | number | null
  content?: StringWithAggregatesFilter<"ForumComment"> | string
  isAnonymous?: BoolWithAggregatesFilter<"ForumComment"> | boolean
  createdAt?: DateTimeWithAggregatesFilter<"ForumComment"> | Date | string
}

export type ResourceWhereInput = {
  AND?: ResourceWhereInput | ResourceWhereInput[]
  OR?: ResourceWhereInput[]
  NOT?: ResourceWhereInput | ResourceWhereInput[]
  id?: IntFilter<"Resource"> | number
  title?: StringFilter<"Resource"> | string
  type?: StringNullableFilter<"Resource"> | string | null
  content?: StringNullableFilter<"Resource"> | string | null
  url?: StringNullableFilter<"Resource"> | string | null
  createdAt?: DateTimeFilter<"Resource"> | Date | string
}

export type ResourceOrderByWithRelationInput = {
  id?: SortOrder
  title?: SortOrder
  type?: SortOrderInput | SortOrder
  content?: SortOrderInput | SortOrder
  url?: SortOrderInput | SortOrder
  createdAt?: SortOrder
  _relevance?: ResourceOrderByRelevanceInput
}

export type ResourceWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: ResourceWhereInput | ResourceWhereInput[]
  OR?: ResourceWhereInput[]
  NOT?: ResourceWhereInput | ResourceWhereInput[]
  title?: StringFilter<"Resource"> | string
  type?: StringNullableFilter<"Resource"> | string | null
  content?: StringNullableFilter<"Resource"> | string | null
  url?: StringNullableFilter<"Resource"> | string | null
  createdAt?: DateTimeFilter<"Resource"> | Date | string
}, "id">

export type ResourceOrderByWithAggregationInput = {
  id?: SortOrder
  title?: SortOrder
  type?: SortOrderInput | SortOrder
  content?: SortOrderInput | SortOrder
  url?: SortOrderInput | SortOrder
  createdAt?: SortOrder
  _count?: ResourceCountOrderByAggregateInput
  _avg?: ResourceAvgOrderByAggregateInput
  _max?: ResourceMaxOrderByAggregateInput
  _min?: ResourceMinOrderByAggregateInput
  _sum?: ResourceSumOrderByAggregateInput
}

export type ResourceScalarWhereWithAggregatesInput = {
  AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
  OR?: ResourceScalarWhereWithAggregatesInput[]
  NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter<"Resource"> | number
  title?: StringWithAggregatesFilter<"Resource"> | string
  type?: StringNullableWithAggregatesFilter<"Resource"> | string | null
  content?: StringNullableWithAggregatesFilter<"Resource"> | string | null
  url?: StringNullableWithAggregatesFilter<"Resource"> | string | null
  createdAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
}

export type UserPreferenceWhereInput = {
  AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
  OR?: UserPreferenceWhereInput[]
  NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
  id?: IntFilter<"UserPreference"> | number
  userId?: IntFilter<"UserPreference"> | number
  privacySetting?: StringFilter<"UserPreference"> | string
  notificationPreferences?: JsonNullableFilter<"UserPreference">
  languagePreference?: StringFilter<"UserPreference"> | string
  accessibilityOptions?: JsonNullableFilter<"UserPreference">
  createdAt?: DateTimeFilter<"UserPreference"> | Date | string
  updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
  user?: XOR<UserScalarRelationFilter, UserWhereInput>
}

export type UserPreferenceOrderByWithRelationInput = {
  id?: SortOrder
  userId?: SortOrder
  privacySetting?: SortOrder
  notificationPreferences?: SortOrderInput | SortOrder
  languagePreference?: SortOrder
  accessibilityOptions?: SortOrderInput | SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  user?: UserOrderByWithRelationInput
  _relevance?: UserPreferenceOrderByRelevanceInput
}

export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  userId?: number
  AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
  OR?: UserPreferenceWhereInput[]
  NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
  privacySetting?: StringFilter<"UserPreference"> | string
  notificationPreferences?: JsonNullableFilter<"UserPreference">
  languagePreference?: StringFilter<"UserPreference"> | string
  accessibilityOptions?: JsonNullableFilter<"UserPreference">
  createdAt?: DateTimeFilter<"UserPreference"> | Date | string
  updatedAt?: DateTimeFilter<"UserPreference"> | Date | string
  user?: XOR<UserScalarRelationFilter, UserWhereInput>
}, "id" | "userId">

export type UserPreferenceOrderByWithAggregationInput = {
  id?: SortOrder
  userId?: SortOrder
  privacySetting?: SortOrder
  notificationPreferences?: SortOrderInput | SortOrder
  languagePreference?: SortOrder
  accessibilityOptions?: SortOrderInput | SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: UserPreferenceCountOrderByAggregateInput
  _avg?: UserPreferenceAvgOrderByAggregateInput
  _max?: UserPreferenceMaxOrderByAggregateInput
  _min?: UserPreferenceMinOrderByAggregateInput
  _sum?: UserPreferenceSumOrderByAggregateInput
}

export type UserPreferenceScalarWhereWithAggregatesInput = {
  AND?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
  OR?: UserPreferenceScalarWhereWithAggregatesInput[]
  NOT?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter<"UserPreference"> | number
  userId?: IntWithAggregatesFilter<"UserPreference"> | number
  privacySetting?: StringWithAggregatesFilter<"UserPreference"> | string
  notificationPreferences?: JsonNullableWithAggregatesFilter<"UserPreference">
  languagePreference?: StringWithAggregatesFilter<"UserPreference"> | string
  accessibilityOptions?: JsonNullableWithAggregatesFilter<"UserPreference">
  createdAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
  updatedAt?: DateTimeWithAggregatesFilter<"UserPreference"> | Date | string
}

export type GardenElementWhereInput = {
  AND?: GardenElementWhereInput | GardenElementWhereInput[]
  OR?: GardenElementWhereInput[]
  NOT?: GardenElementWhereInput | GardenElementWhereInput[]
  id?: IntFilter<"GardenElement"> | number
  userId?: IntFilter<"GardenElement"> | number
  type?: EnumGardenElementTypeFilter<"GardenElement"> | $Enums.GardenElementType
  name?: StringFilter<"GardenElement"> | string
  description?: StringNullableFilter<"GardenElement"> | string | null
  plantedDate?: DateTimeFilter<"GardenElement"> | Date | string
  lastWateredDate?: DateTimeFilter<"GardenElement"> | Date | string
  growthStage?: IntFilter<"GardenElement"> | number
  healthStatus?: EnumHealthStatusFilter<"GardenElement"> | $Enums.HealthStatus
  positionX?: IntFilter<"GardenElement"> | number
  positionY?: IntFilter<"GardenElement"> | number
  createdAt?: DateTimeFilter<"GardenElement"> | Date | string
  updatedAt?: DateTimeFilter<"GardenElement"> | Date | string
  user?: XOR<UserScalarRelationFilter, UserWhereInput>
}

export type GardenElementOrderByWithRelationInput = {
  id?: SortOrder
  userId?: SortOrder
  type?: SortOrder
  name?: SortOrder
  description?: SortOrderInput | SortOrder
  plantedDate?: SortOrder
  lastWateredDate?: SortOrder
  growthStage?: SortOrder
  healthStatus?: SortOrder
  positionX?: SortOrder
  positionY?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  user?: UserOrderByWithRelationInput
  _relevance?: GardenElementOrderByRelevanceInput
}

export type GardenElementWhereUniqueInput = Prisma.AtLeast<{
  id?: number
  AND?: GardenElementWhereInput | GardenElementWhereInput[]
  OR?: GardenElementWhereInput[]
  NOT?: GardenElementWhereInput | GardenElementWhereInput[]
  userId?: IntFilter<"GardenElement"> | number
  type?: EnumGardenElementTypeFilter<"GardenElement"> | $Enums.GardenElementType
  name?: StringFilter<"GardenElement"> | string
  description?: StringNullableFilter<"GardenElement"> | string | null
  plantedDate?: DateTimeFilter<"GardenElement"> | Date | string
  lastWateredDate?: DateTimeFilter<"GardenElement"> | Date | string
  growthStage?: IntFilter<"GardenElement"> | number
  healthStatus?: EnumHealthStatusFilter<"GardenElement"> | $Enums.HealthStatus
  positionX?: IntFilter<"GardenElement"> | number
  positionY?: IntFilter<"GardenElement"> | number
  createdAt?: DateTimeFilter<"GardenElement"> | Date | string
  updatedAt?: DateTimeFilter<"GardenElement"> | Date | string
  user?: XOR<UserScalarRelationFilter, UserWhereInput>
}, "id">

export type GardenElementOrderByWithAggregationInput = {
  id?: SortOrder
  userId?: SortOrder
  type?: SortOrder
  name?: SortOrder
  description?: SortOrderInput | SortOrder
  plantedDate?: SortOrder
  lastWateredDate?: SortOrder
  growthStage?: SortOrder
  healthStatus?: SortOrder
  positionX?: SortOrder
  positionY?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: GardenElementCountOrderByAggregateInput
  _avg?: GardenElementAvgOrderByAggregateInput
  _max?: GardenElementMaxOrderByAggregateInput
  _min?: GardenElementMinOrderByAggregateInput
  _sum?: GardenElementSumOrderByAggregateInput
}

export type GardenElementScalarWhereWithAggregatesInput = {
  AND?: GardenElementScalarWhereWithAggregatesInput | GardenElementScalarWhereWithAggregatesInput[]
  OR?: GardenElementScalarWhereWithAggregatesInput[]
  NOT?: GardenElementScalarWhereWithAggregatesInput | GardenElementScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter<"GardenElement"> | number
  userId?: IntWithAggregatesFilter<"GardenElement"> | number
  type?: EnumGardenElementTypeWithAggregatesFilter<"GardenElement"> | $Enums.GardenElementType
  name?: StringWithAggregatesFilter<"GardenElement"> | string
  description?: StringNullableWithAggregatesFilter<"GardenElement"> | string | null
  plantedDate?: DateTimeWithAggregatesFilter<"GardenElement"> | Date | string
  lastWateredDate?: DateTimeWithAggregatesFilter<"GardenElement"> | Date | string
  growthStage?: IntWithAggregatesFilter<"GardenElement"> | number
  healthStatus?: EnumHealthStatusWithAggregatesFilter<"GardenElement"> | $Enums.HealthStatus
  positionX?: IntWithAggregatesFilter<"GardenElement"> | number
  positionY?: IntWithAggregatesFilter<"GardenElement"> | number
  createdAt?: DateTimeWithAggregatesFilter<"GardenElement"> | Date | string
  updatedAt?: DateTimeWithAggregatesFilter<"GardenElement"> | Date | string
}

export type UserCreateInput = {
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  mentalHealthMetrics?: MentalHealthMetricCreateNestedManyWithoutUserInput
  forumPosts?: ForumPostCreateNestedManyWithoutUserInput
  forumComments?: ForumCommentCreateNestedManyWithoutUserInput
  preferences?: UserPreferenceCreateNestedOneWithoutUserInput
  gardenElements?: GardenElementCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateInput = {
  id?: number
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  mentalHealthMetrics?: MentalHealthMetricUncheckedCreateNestedManyWithoutUserInput
  forumPosts?: ForumPostUncheckedCreateNestedManyWithoutUserInput
  forumComments?: ForumCommentUncheckedCreateNestedManyWithoutUserInput
  preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  gardenElements?: GardenElementUncheckedCreateNestedManyWithoutUserInput
}

export type UserUpdateInput = {
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  mentalHealthMetrics?: MentalHealthMetricUpdateManyWithoutUserNestedInput
  forumPosts?: ForumPostUpdateManyWithoutUserNestedInput
  forumComments?: ForumCommentUpdateManyWithoutUserNestedInput
  preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
  gardenElements?: GardenElementUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput | number
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  mentalHealthMetrics?: MentalHealthMetricUncheckedUpdateManyWithoutUserNestedInput
  forumPosts?: ForumPostUncheckedUpdateManyWithoutUserNestedInput
  forumComments?: ForumCommentUncheckedUpdateManyWithoutUserNestedInput
  preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  gardenElements?: GardenElementUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateManyInput = {
  id?: number
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type UserUpdateManyMutationInput = {
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type UserUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput | number
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type MentalHealthMetricCreateInput = {
  metricDate: Date | string
  mood: number
  anxietyLevel?: number | null
  stressLevel?: number | null
  notes?: string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: Date | string
  user: UserCreateNestedOneWithoutMentalHealthMetricsInput
}

export type MentalHealthMetricUncheckedCreateInput = {
  id?: number
  userId: number
  metricDate: Date | string
  mood: number
  anxietyLevel?: number | null
  stressLevel?: number | null
  notes?: string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: Date | string
}

export type MentalHealthMetricUpdateInput = {
  metricDate?: DateTimeFieldUpdateOperationsInput | Date | string
  mood?: IntFieldUpdateOperationsInput | number
  anxietyLevel?: NullableIntFieldUpdateOperationsInput | number | null
  stressLevel?: NullableIntFieldUpdateOperationsInput | number | null
  notes?: NullableStringFieldUpdateOperationsInput | string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  user?: UserUpdateOneRequiredWithoutMentalHealthMetricsNestedInput
}

export type MentalHealthMetricUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: IntFieldUpdateOperationsInput | number
  metricDate?: DateTimeFieldUpdateOperationsInput | Date | string
  mood?: IntFieldUpdateOperationsInput | number
  anxietyLevel?: NullableIntFieldUpdateOperationsInput | number | null
  stressLevel?: NullableIntFieldUpdateOperationsInput | number | null
  notes?: NullableStringFieldUpdateOperationsInput | string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type MentalHealthMetricCreateManyInput = {
  id?: number
  userId: number
  metricDate: Date | string
  mood: number
  anxietyLevel?: number | null
  stressLevel?: number | null
  notes?: string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: Date | string
}

export type MentalHealthMetricUpdateManyMutationInput = {
  metricDate?: DateTimeFieldUpdateOperationsInput | Date | string
  mood?: IntFieldUpdateOperationsInput | number
  anxietyLevel?: NullableIntFieldUpdateOperationsInput | number | null
  stressLevel?: NullableIntFieldUpdateOperationsInput | number | null
  notes?: NullableStringFieldUpdateOperationsInput | string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type MentalHealthMetricUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: IntFieldUpdateOperationsInput | number
  metricDate?: DateTimeFieldUpdateOperationsInput | Date | string
  mood?: IntFieldUpdateOperationsInput | number
  anxietyLevel?: NullableIntFieldUpdateOperationsInput | number | null
  stressLevel?: NullableIntFieldUpdateOperationsInput | number | null
  notes?: NullableStringFieldUpdateOperationsInput | string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ForumCategoryCreateInput = {
  name: string
  posts?: ForumPostCreateNestedManyWithoutCategoryInput
}

export type ForumCategoryUncheckedCreateInput = {
  id?: number
  name: string
  posts?: ForumPostUncheckedCreateNestedManyWithoutCategoryInput
}

export type ForumCategoryUpdateInput = {
  name?: StringFieldUpdateOperationsInput | string
  posts?: ForumPostUpdateManyWithoutCategoryNestedInput
}

export type ForumCategoryUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput | number
  name?: StringFieldUpdateOperationsInput | string
  posts?: ForumPostUncheckedUpdateManyWithoutCategoryNestedInput
}

export type ForumCategoryCreateManyInput = {
  id?: number
  name: string
}

export type ForumCategoryUpdateManyMutationInput = {
  name?: StringFieldUpdateOperationsInput | string
}

export type ForumCategoryUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput | number
  name?: StringFieldUpdateOperationsInput | string
}

export type ForumPostCreateInput = {
  title: string
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  user?: UserCreateNestedOneWithoutForumPostsInput
  category?: ForumCategoryCreateNestedOneWithoutPostsInput
  comments?: ForumCommentCreateNestedManyWithoutPostInput
}

export type ForumPostUncheckedCreateInput = {
  id?: number
  userId?: number | null
  categoryId?: number | null
  title: string
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  comments?: ForumCommentUncheckedCreateNestedManyWithoutPostInput
}

export type ForumPostUpdateInput = {
  title?: StringFieldUpdateOperationsInput | string
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  user?: UserUpdateOneWithoutForumPostsNestedInput
  category?: ForumCategoryUpdateOneWithoutPostsNestedInput
  comments?: ForumCommentUpdateManyWithoutPostNestedInput
}

export type ForumPostUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: NullableIntFieldUpdateOperationsInput | number | null
  categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  title?: StringFieldUpdateOperationsInput | string
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  comments?: ForumCommentUncheckedUpdateManyWithoutPostNestedInput
}

export type ForumPostCreateManyInput = {
  id?: number
  userId?: number | null
  categoryId?: number | null
  title: string
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ForumPostUpdateManyMutationInput = {
  title?: StringFieldUpdateOperationsInput | string
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ForumPostUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: NullableIntFieldUpdateOperationsInput | number | null
  categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  title?: StringFieldUpdateOperationsInput | string
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ForumCommentCreateInput = {
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  post: ForumPostCreateNestedOneWithoutCommentsInput
  user?: UserCreateNestedOneWithoutForumCommentsInput
}

export type ForumCommentUncheckedCreateInput = {
  id?: number
  postId: number
  userId?: number | null
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
}

export type ForumCommentUpdateInput = {
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  post?: ForumPostUpdateOneRequiredWithoutCommentsNestedInput
  user?: UserUpdateOneWithoutForumCommentsNestedInput
}

export type ForumCommentUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput | number
  postId?: IntFieldUpdateOperationsInput | number
  userId?: NullableIntFieldUpdateOperationsInput | number | null
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ForumCommentCreateManyInput = {
  id?: number
  postId: number
  userId?: number | null
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
}

export type ForumCommentUpdateManyMutationInput = {
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ForumCommentUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput | number
  postId?: IntFieldUpdateOperationsInput | number
  userId?: NullableIntFieldUpdateOperationsInput | number | null
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ResourceCreateInput = {
  title: string
  type?: string | null
  content?: string | null
  url?: string | null
  createdAt?: Date | string
}

export type ResourceUncheckedCreateInput = {
  id?: number
  title: string
  type?: string | null
  content?: string | null
  url?: string | null
  createdAt?: Date | string
}

export type ResourceUpdateInput = {
  title?: StringFieldUpdateOperationsInput | string
  type?: NullableStringFieldUpdateOperationsInput | string | null
  content?: NullableStringFieldUpdateOperationsInput | string | null
  url?: NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ResourceUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput | number
  title?: StringFieldUpdateOperationsInput | string
  type?: NullableStringFieldUpdateOperationsInput | string | null
  content?: NullableStringFieldUpdateOperationsInput | string | null
  url?: NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ResourceCreateManyInput = {
  id?: number
  title: string
  type?: string | null
  content?: string | null
  url?: string | null
  createdAt?: Date | string
}

export type ResourceUpdateManyMutationInput = {
  title?: StringFieldUpdateOperationsInput | string
  type?: NullableStringFieldUpdateOperationsInput | string | null
  content?: NullableStringFieldUpdateOperationsInput | string | null
  url?: NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ResourceUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput | number
  title?: StringFieldUpdateOperationsInput | string
  type?: NullableStringFieldUpdateOperationsInput | string | null
  content?: NullableStringFieldUpdateOperationsInput | string | null
  url?: NullableStringFieldUpdateOperationsInput | string | null
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type UserPreferenceCreateInput = {
  privacySetting?: string
  notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
  languagePreference?: string
  accessibilityOptions?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: Date | string
  updatedAt?: Date | string
  user: UserCreateNestedOneWithoutPreferencesInput
}

export type UserPreferenceUncheckedCreateInput = {
  id?: number
  userId: number
  privacySetting?: string
  notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
  languagePreference?: string
  accessibilityOptions?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type UserPreferenceUpdateInput = {
  privacySetting?: StringFieldUpdateOperationsInput | string
  notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
  languagePreference?: StringFieldUpdateOperationsInput | string
  accessibilityOptions?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
}

export type UserPreferenceUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: IntFieldUpdateOperationsInput | number
  privacySetting?: StringFieldUpdateOperationsInput | string
  notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
  languagePreference?: StringFieldUpdateOperationsInput | string
  accessibilityOptions?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type UserPreferenceCreateManyInput = {
  id?: number
  userId: number
  privacySetting?: string
  notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
  languagePreference?: string
  accessibilityOptions?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type UserPreferenceUpdateManyMutationInput = {
  privacySetting?: StringFieldUpdateOperationsInput | string
  notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
  languagePreference?: StringFieldUpdateOperationsInput | string
  accessibilityOptions?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type UserPreferenceUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: IntFieldUpdateOperationsInput | number
  privacySetting?: StringFieldUpdateOperationsInput | string
  notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
  languagePreference?: StringFieldUpdateOperationsInput | string
  accessibilityOptions?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type GardenElementCreateInput = {
  type: $Enums.GardenElementType
  name: string
  description?: string | null
  plantedDate?: Date | string
  lastWateredDate?: Date | string
  growthStage?: number
  healthStatus?: $Enums.HealthStatus
  positionX: number
  positionY: number
  createdAt?: Date | string
  updatedAt?: Date | string
  user: UserCreateNestedOneWithoutGardenElementsInput
}

export type GardenElementUncheckedCreateInput = {
  id?: number
  userId: number
  type: $Enums.GardenElementType
  name: string
  description?: string | null
  plantedDate?: Date | string
  lastWateredDate?: Date | string
  growthStage?: number
  healthStatus?: $Enums.HealthStatus
  positionX: number
  positionY: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type GardenElementUpdateInput = {
  type?: EnumGardenElementTypeFieldUpdateOperationsInput | $Enums.GardenElementType
  name?: StringFieldUpdateOperationsInput | string
  description?: NullableStringFieldUpdateOperationsInput | string | null
  plantedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  lastWateredDate?: DateTimeFieldUpdateOperationsInput | Date | string
  growthStage?: IntFieldUpdateOperationsInput | number
  healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
  positionX?: IntFieldUpdateOperationsInput | number
  positionY?: IntFieldUpdateOperationsInput | number
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  user?: UserUpdateOneRequiredWithoutGardenElementsNestedInput
}

export type GardenElementUncheckedUpdateInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: IntFieldUpdateOperationsInput | number
  type?: EnumGardenElementTypeFieldUpdateOperationsInput | $Enums.GardenElementType
  name?: StringFieldUpdateOperationsInput | string
  description?: NullableStringFieldUpdateOperationsInput | string | null
  plantedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  lastWateredDate?: DateTimeFieldUpdateOperationsInput | Date | string
  growthStage?: IntFieldUpdateOperationsInput | number
  healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
  positionX?: IntFieldUpdateOperationsInput | number
  positionY?: IntFieldUpdateOperationsInput | number
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type GardenElementCreateManyInput = {
  id?: number
  userId: number
  type: $Enums.GardenElementType
  name: string
  description?: string | null
  plantedDate?: Date | string
  lastWateredDate?: Date | string
  growthStage?: number
  healthStatus?: $Enums.HealthStatus
  positionX: number
  positionY: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type GardenElementUpdateManyMutationInput = {
  type?: EnumGardenElementTypeFieldUpdateOperationsInput | $Enums.GardenElementType
  name?: StringFieldUpdateOperationsInput | string
  description?: NullableStringFieldUpdateOperationsInput | string | null
  plantedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  lastWateredDate?: DateTimeFieldUpdateOperationsInput | Date | string
  growthStage?: IntFieldUpdateOperationsInput | number
  healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
  positionX?: IntFieldUpdateOperationsInput | number
  positionY?: IntFieldUpdateOperationsInput | number
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type GardenElementUncheckedUpdateManyInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: IntFieldUpdateOperationsInput | number
  type?: EnumGardenElementTypeFieldUpdateOperationsInput | $Enums.GardenElementType
  name?: StringFieldUpdateOperationsInput | string
  description?: NullableStringFieldUpdateOperationsInput | string | null
  plantedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  lastWateredDate?: DateTimeFieldUpdateOperationsInput | Date | string
  growthStage?: IntFieldUpdateOperationsInput | number
  healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
  positionX?: IntFieldUpdateOperationsInput | number
  positionY?: IntFieldUpdateOperationsInput | number
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type IntFilter<$PrismaModel = never> = {
  equals?: number | IntFieldRefInput<$PrismaModel>
  in?: number[]
  notIn?: number[]
  lt?: number | IntFieldRefInput<$PrismaModel>
  lte?: number | IntFieldRefInput<$PrismaModel>
  gt?: number | IntFieldRefInput<$PrismaModel>
  gte?: number | IntFieldRefInput<$PrismaModel>
  not?: NestedIntFilter<$PrismaModel> | number
}

export type StringFilter<$PrismaModel = never> = {
  equals?: string | StringFieldRefInput<$PrismaModel>
  in?: string[]
  notIn?: string[]
  lt?: string | StringFieldRefInput<$PrismaModel>
  lte?: string | StringFieldRefInput<$PrismaModel>
  gt?: string | StringFieldRefInput<$PrismaModel>
  gte?: string | StringFieldRefInput<$PrismaModel>
  contains?: string | StringFieldRefInput<$PrismaModel>
  startsWith?: string | StringFieldRefInput<$PrismaModel>
  endsWith?: string | StringFieldRefInput<$PrismaModel>
  search?: string
  not?: NestedStringFilter<$PrismaModel> | string
}

export type BoolFilter<$PrismaModel = never> = {
  equals?: boolean | BooleanFieldRefInput<$PrismaModel>
  not?: NestedBoolFilter<$PrismaModel> | boolean
}

export type DateTimeFilter<$PrismaModel = never> = {
  equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  in?: Date[] | string[]
  notIn?: Date[] | string[]
  lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  not?: NestedDateTimeFilter<$PrismaModel> | Date | string
}

export type MentalHealthMetricListRelationFilter = {
  every?: MentalHealthMetricWhereInput
  some?: MentalHealthMetricWhereInput
  none?: MentalHealthMetricWhereInput
}

export type ForumPostListRelationFilter = {
  every?: ForumPostWhereInput
  some?: ForumPostWhereInput
  none?: ForumPostWhereInput
}

export type ForumCommentListRelationFilter = {
  every?: ForumCommentWhereInput
  some?: ForumCommentWhereInput
  none?: ForumCommentWhereInput
}

export type UserPreferenceNullableScalarRelationFilter = {
  is?: UserPreferenceWhereInput | null
  isNot?: UserPreferenceWhereInput | null
}

export type GardenElementListRelationFilter = {
  every?: GardenElementWhereInput
  some?: GardenElementWhereInput
  none?: GardenElementWhereInput
}

export type MentalHealthMetricOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type ForumPostOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type ForumCommentOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type GardenElementOrderByRelationAggregateInput = {
  _count?: SortOrder
}

export type UserOrderByRelevanceInput = {
  fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
  sort: SortOrder
  search: string
}

export type UserCountOrderByAggregateInput = {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  passwordHash?: SortOrder
  isEmailVerified?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserAvgOrderByAggregateInput = {
  id?: SortOrder
}

export type UserMaxOrderByAggregateInput = {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  passwordHash?: SortOrder
  isEmailVerified?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserMinOrderByAggregateInput = {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  passwordHash?: SortOrder
  isEmailVerified?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserSumOrderByAggregateInput = {
  id?: SortOrder
}

export type IntWithAggregatesFilter<$PrismaModel = never> = {
  equals?: number | IntFieldRefInput<$PrismaModel>
  in?: number[]
  notIn?: number[]
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
  in?: string[]
  notIn?: string[]
  lt?: string | StringFieldRefInput<$PrismaModel>
  lte?: string | StringFieldRefInput<$PrismaModel>
  gt?: string | StringFieldRefInput<$PrismaModel>
  gte?: string | StringFieldRefInput<$PrismaModel>
  contains?: string | StringFieldRefInput<$PrismaModel>
  startsWith?: string | StringFieldRefInput<$PrismaModel>
  endsWith?: string | StringFieldRefInput<$PrismaModel>
  search?: string
  not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
  _count?: NestedIntFilter<$PrismaModel>
  _min?: NestedStringFilter<$PrismaModel>
  _max?: NestedStringFilter<$PrismaModel>
}

export type BoolWithAggregatesFilter<$PrismaModel = never> = {
  equals?: boolean | BooleanFieldRefInput<$PrismaModel>
  not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
  _count?: NestedIntFilter<$PrismaModel>
  _min?: NestedBoolFilter<$PrismaModel>
  _max?: NestedBoolFilter<$PrismaModel>
}

export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
  equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  in?: Date[] | string[]
  notIn?: Date[] | string[]
  lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
  _count?: NestedIntFilter<$PrismaModel>
  _min?: NestedDateTimeFilter<$PrismaModel>
  _max?: NestedDateTimeFilter<$PrismaModel>
}

export type IntNullableFilter<$PrismaModel = never> = {
  equals?: number | IntFieldRefInput<$PrismaModel> | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number | IntFieldRefInput<$PrismaModel>
  lte?: number | IntFieldRefInput<$PrismaModel>
  gt?: number | IntFieldRefInput<$PrismaModel>
  gte?: number | IntFieldRefInput<$PrismaModel>
  not?: NestedIntNullableFilter<$PrismaModel> | number | null
}

export type StringNullableFilter<$PrismaModel = never> = {
  equals?: string | StringFieldRefInput<$PrismaModel> | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string | StringFieldRefInput<$PrismaModel>
  lte?: string | StringFieldRefInput<$PrismaModel>
  gt?: string | StringFieldRefInput<$PrismaModel>
  gte?: string | StringFieldRefInput<$PrismaModel>
  contains?: string | StringFieldRefInput<$PrismaModel>
  startsWith?: string | StringFieldRefInput<$PrismaModel>
  endsWith?: string | StringFieldRefInput<$PrismaModel>
  search?: string
  not?: NestedStringNullableFilter<$PrismaModel> | string | null
}
export type JsonNullableFilter<$PrismaModel = never> =
  | PatchUndefined<
    Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
    Required<JsonNullableFilterBase<$PrismaModel>>
  >
  | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

export type JsonNullableFilterBase<$PrismaModel = never> = {
  equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  path?: string
  mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
  string_contains?: string | StringFieldRefInput<$PrismaModel>
  string_starts_with?: string | StringFieldRefInput<$PrismaModel>
  string_ends_with?: string | StringFieldRefInput<$PrismaModel>
  array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
  array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
  array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
  lt?: InputJsonValue
  lte?: InputJsonValue
  gt?: InputJsonValue
  gte?: InputJsonValue
  not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
}

export type UserScalarRelationFilter = {
  is?: UserWhereInput
  isNot?: UserWhereInput
}

export type SortOrderInput = {
  sort: SortOrder
  nulls?: NullsOrder
}

export type MentalHealthMetricOrderByRelevanceInput = {
  fields: MentalHealthMetricOrderByRelevanceFieldEnum | MentalHealthMetricOrderByRelevanceFieldEnum[]
  sort: SortOrder
  search: string
}

export type MentalHealthMetricCountOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  metricDate?: SortOrder
  mood?: SortOrder
  anxietyLevel?: SortOrder
  stressLevel?: SortOrder
  notes?: SortOrder
  activities?: SortOrder
  createdAt?: SortOrder
}

export type MentalHealthMetricAvgOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  mood?: SortOrder
  anxietyLevel?: SortOrder
  stressLevel?: SortOrder
}

export type MentalHealthMetricMaxOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  metricDate?: SortOrder
  mood?: SortOrder
  anxietyLevel?: SortOrder
  stressLevel?: SortOrder
  notes?: SortOrder
  createdAt?: SortOrder
}

export type MentalHealthMetricMinOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  metricDate?: SortOrder
  mood?: SortOrder
  anxietyLevel?: SortOrder
  stressLevel?: SortOrder
  notes?: SortOrder
  createdAt?: SortOrder
}

export type MentalHealthMetricSumOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  mood?: SortOrder
  anxietyLevel?: SortOrder
  stressLevel?: SortOrder
}

export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
  equals?: number | IntFieldRefInput<$PrismaModel> | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number | IntFieldRefInput<$PrismaModel>
  lte?: number | IntFieldRefInput<$PrismaModel>
  gt?: number | IntFieldRefInput<$PrismaModel>
  gte?: number | IntFieldRefInput<$PrismaModel>
  not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
  _count?: NestedIntNullableFilter<$PrismaModel>
  _avg?: NestedFloatNullableFilter<$PrismaModel>
  _sum?: NestedIntNullableFilter<$PrismaModel>
  _min?: NestedIntNullableFilter<$PrismaModel>
  _max?: NestedIntNullableFilter<$PrismaModel>
}

export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
  equals?: string | StringFieldRefInput<$PrismaModel> | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string | StringFieldRefInput<$PrismaModel>
  lte?: string | StringFieldRefInput<$PrismaModel>
  gt?: string | StringFieldRefInput<$PrismaModel>
  gte?: string | StringFieldRefInput<$PrismaModel>
  contains?: string | StringFieldRefInput<$PrismaModel>
  startsWith?: string | StringFieldRefInput<$PrismaModel>
  endsWith?: string | StringFieldRefInput<$PrismaModel>
  search?: string
  not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
  _count?: NestedIntNullableFilter<$PrismaModel>
  _min?: NestedStringNullableFilter<$PrismaModel>
  _max?: NestedStringNullableFilter<$PrismaModel>
}
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
  | PatchUndefined<
    Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
    Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
  >
  | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
  equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  path?: string
  mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
  string_contains?: string | StringFieldRefInput<$PrismaModel>
  string_starts_with?: string | StringFieldRefInput<$PrismaModel>
  string_ends_with?: string | StringFieldRefInput<$PrismaModel>
  array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
  array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
  array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
  lt?: InputJsonValue
  lte?: InputJsonValue
  gt?: InputJsonValue
  gte?: InputJsonValue
  not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  _count?: NestedIntNullableFilter<$PrismaModel>
  _min?: NestedJsonNullableFilter<$PrismaModel>
  _max?: NestedJsonNullableFilter<$PrismaModel>
}

export type ForumCategoryOrderByRelevanceInput = {
  fields: ForumCategoryOrderByRelevanceFieldEnum | ForumCategoryOrderByRelevanceFieldEnum[]
  sort: SortOrder
  search: string
}

export type ForumCategoryCountOrderByAggregateInput = {
  id?: SortOrder
  name?: SortOrder
}

export type ForumCategoryAvgOrderByAggregateInput = {
  id?: SortOrder
}

export type ForumCategoryMaxOrderByAggregateInput = {
  id?: SortOrder
  name?: SortOrder
}

export type ForumCategoryMinOrderByAggregateInput = {
  id?: SortOrder
  name?: SortOrder
}

export type ForumCategorySumOrderByAggregateInput = {
  id?: SortOrder
}

export type UserNullableScalarRelationFilter = {
  is?: UserWhereInput | null
  isNot?: UserWhereInput | null
}

export type ForumCategoryNullableScalarRelationFilter = {
  is?: ForumCategoryWhereInput | null
  isNot?: ForumCategoryWhereInput | null
}

export type ForumPostOrderByRelevanceInput = {
  fields: ForumPostOrderByRelevanceFieldEnum | ForumPostOrderByRelevanceFieldEnum[]
  sort: SortOrder
  search: string
}

export type ForumPostCountOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  categoryId?: SortOrder
  title?: SortOrder
  content?: SortOrder
  isAnonymous?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type ForumPostAvgOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  categoryId?: SortOrder
}

export type ForumPostMaxOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  categoryId?: SortOrder
  title?: SortOrder
  content?: SortOrder
  isAnonymous?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type ForumPostMinOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  categoryId?: SortOrder
  title?: SortOrder
  content?: SortOrder
  isAnonymous?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type ForumPostSumOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  categoryId?: SortOrder
}

export type ForumPostScalarRelationFilter = {
  is?: ForumPostWhereInput
  isNot?: ForumPostWhereInput
}

export type ForumCommentOrderByRelevanceInput = {
  fields: ForumCommentOrderByRelevanceFieldEnum | ForumCommentOrderByRelevanceFieldEnum[]
  sort: SortOrder
  search: string
}

export type ForumCommentCountOrderByAggregateInput = {
  id?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
  content?: SortOrder
  isAnonymous?: SortOrder
  createdAt?: SortOrder
}

export type ForumCommentAvgOrderByAggregateInput = {
  id?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
}

export type ForumCommentMaxOrderByAggregateInput = {
  id?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
  content?: SortOrder
  isAnonymous?: SortOrder
  createdAt?: SortOrder
}

export type ForumCommentMinOrderByAggregateInput = {
  id?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
  content?: SortOrder
  isAnonymous?: SortOrder
  createdAt?: SortOrder
}

export type ForumCommentSumOrderByAggregateInput = {
  id?: SortOrder
  postId?: SortOrder
  userId?: SortOrder
}

export type ResourceOrderByRelevanceInput = {
  fields: ResourceOrderByRelevanceFieldEnum | ResourceOrderByRelevanceFieldEnum[]
  sort: SortOrder
  search: string
}

export type ResourceCountOrderByAggregateInput = {
  id?: SortOrder
  title?: SortOrder
  type?: SortOrder
  content?: SortOrder
  url?: SortOrder
  createdAt?: SortOrder
}

export type ResourceAvgOrderByAggregateInput = {
  id?: SortOrder
}

export type ResourceMaxOrderByAggregateInput = {
  id?: SortOrder
  title?: SortOrder
  type?: SortOrder
  content?: SortOrder
  url?: SortOrder
  createdAt?: SortOrder
}

export type ResourceMinOrderByAggregateInput = {
  id?: SortOrder
  title?: SortOrder
  type?: SortOrder
  content?: SortOrder
  url?: SortOrder
  createdAt?: SortOrder
}

export type ResourceSumOrderByAggregateInput = {
  id?: SortOrder
}

export type UserPreferenceOrderByRelevanceInput = {
  fields: UserPreferenceOrderByRelevanceFieldEnum | UserPreferenceOrderByRelevanceFieldEnum[]
  sort: SortOrder
  search: string
}

export type UserPreferenceCountOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  privacySetting?: SortOrder
  notificationPreferences?: SortOrder
  languagePreference?: SortOrder
  accessibilityOptions?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserPreferenceAvgOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
}

export type UserPreferenceMaxOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  privacySetting?: SortOrder
  languagePreference?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserPreferenceMinOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  privacySetting?: SortOrder
  languagePreference?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type UserPreferenceSumOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
}

export type EnumGardenElementTypeFilter<$PrismaModel = never> = {
  equals?: $Enums.GardenElementType | EnumGardenElementTypeFieldRefInput<$PrismaModel>
  in?: $Enums.GardenElementType[]
  notIn?: $Enums.GardenElementType[]
  not?: NestedEnumGardenElementTypeFilter<$PrismaModel> | $Enums.GardenElementType
}

export type EnumHealthStatusFilter<$PrismaModel = never> = {
  equals?: $Enums.HealthStatus | EnumHealthStatusFieldRefInput<$PrismaModel>
  in?: $Enums.HealthStatus[]
  notIn?: $Enums.HealthStatus[]
  not?: NestedEnumHealthStatusFilter<$PrismaModel> | $Enums.HealthStatus
}

export type GardenElementOrderByRelevanceInput = {
  fields: GardenElementOrderByRelevanceFieldEnum | GardenElementOrderByRelevanceFieldEnum[]
  sort: SortOrder
  search: string
}

export type GardenElementCountOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  type?: SortOrder
  name?: SortOrder
  description?: SortOrder
  plantedDate?: SortOrder
  lastWateredDate?: SortOrder
  growthStage?: SortOrder
  healthStatus?: SortOrder
  positionX?: SortOrder
  positionY?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type GardenElementAvgOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  growthStage?: SortOrder
  positionX?: SortOrder
  positionY?: SortOrder
}

export type GardenElementMaxOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  type?: SortOrder
  name?: SortOrder
  description?: SortOrder
  plantedDate?: SortOrder
  lastWateredDate?: SortOrder
  growthStage?: SortOrder
  healthStatus?: SortOrder
  positionX?: SortOrder
  positionY?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type GardenElementMinOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  type?: SortOrder
  name?: SortOrder
  description?: SortOrder
  plantedDate?: SortOrder
  lastWateredDate?: SortOrder
  growthStage?: SortOrder
  healthStatus?: SortOrder
  positionX?: SortOrder
  positionY?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export type GardenElementSumOrderByAggregateInput = {
  id?: SortOrder
  userId?: SortOrder
  growthStage?: SortOrder
  positionX?: SortOrder
  positionY?: SortOrder
}

export type EnumGardenElementTypeWithAggregatesFilter<$PrismaModel = never> = {
  equals?: $Enums.GardenElementType | EnumGardenElementTypeFieldRefInput<$PrismaModel>
  in?: $Enums.GardenElementType[]
  notIn?: $Enums.GardenElementType[]
  not?: NestedEnumGardenElementTypeWithAggregatesFilter<$PrismaModel> | $Enums.GardenElementType
  _count?: NestedIntFilter<$PrismaModel>
  _min?: NestedEnumGardenElementTypeFilter<$PrismaModel>
  _max?: NestedEnumGardenElementTypeFilter<$PrismaModel>
}

export type EnumHealthStatusWithAggregatesFilter<$PrismaModel = never> = {
  equals?: $Enums.HealthStatus | EnumHealthStatusFieldRefInput<$PrismaModel>
  in?: $Enums.HealthStatus[]
  notIn?: $Enums.HealthStatus[]
  not?: NestedEnumHealthStatusWithAggregatesFilter<$PrismaModel> | $Enums.HealthStatus
  _count?: NestedIntFilter<$PrismaModel>
  _min?: NestedEnumHealthStatusFilter<$PrismaModel>
  _max?: NestedEnumHealthStatusFilter<$PrismaModel>
}

export type MentalHealthMetricCreateNestedManyWithoutUserInput = {
  create?: XOR<MentalHealthMetricCreateWithoutUserInput, MentalHealthMetricUncheckedCreateWithoutUserInput> | MentalHealthMetricCreateWithoutUserInput[] | MentalHealthMetricUncheckedCreateWithoutUserInput[]
  connectOrCreate?: MentalHealthMetricCreateOrConnectWithoutUserInput | MentalHealthMetricCreateOrConnectWithoutUserInput[]
  createMany?: MentalHealthMetricCreateManyUserInputEnvelope
  connect?: MentalHealthMetricWhereUniqueInput | MentalHealthMetricWhereUniqueInput[]
}

export type ForumPostCreateNestedManyWithoutUserInput = {
  create?: XOR<ForumPostCreateWithoutUserInput, ForumPostUncheckedCreateWithoutUserInput> | ForumPostCreateWithoutUserInput[] | ForumPostUncheckedCreateWithoutUserInput[]
  connectOrCreate?: ForumPostCreateOrConnectWithoutUserInput | ForumPostCreateOrConnectWithoutUserInput[]
  createMany?: ForumPostCreateManyUserInputEnvelope
  connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
}

export type ForumCommentCreateNestedManyWithoutUserInput = {
  create?: XOR<ForumCommentCreateWithoutUserInput, ForumCommentUncheckedCreateWithoutUserInput> | ForumCommentCreateWithoutUserInput[] | ForumCommentUncheckedCreateWithoutUserInput[]
  connectOrCreate?: ForumCommentCreateOrConnectWithoutUserInput | ForumCommentCreateOrConnectWithoutUserInput[]
  createMany?: ForumCommentCreateManyUserInputEnvelope
  connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
}

export type UserPreferenceCreateNestedOneWithoutUserInput = {
  create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
  connect?: UserPreferenceWhereUniqueInput
}

export type GardenElementCreateNestedManyWithoutUserInput = {
  create?: XOR<GardenElementCreateWithoutUserInput, GardenElementUncheckedCreateWithoutUserInput> | GardenElementCreateWithoutUserInput[] | GardenElementUncheckedCreateWithoutUserInput[]
  connectOrCreate?: GardenElementCreateOrConnectWithoutUserInput | GardenElementCreateOrConnectWithoutUserInput[]
  createMany?: GardenElementCreateManyUserInputEnvelope
  connect?: GardenElementWhereUniqueInput | GardenElementWhereUniqueInput[]
}

export type MentalHealthMetricUncheckedCreateNestedManyWithoutUserInput = {
  create?: XOR<MentalHealthMetricCreateWithoutUserInput, MentalHealthMetricUncheckedCreateWithoutUserInput> | MentalHealthMetricCreateWithoutUserInput[] | MentalHealthMetricUncheckedCreateWithoutUserInput[]
  connectOrCreate?: MentalHealthMetricCreateOrConnectWithoutUserInput | MentalHealthMetricCreateOrConnectWithoutUserInput[]
  createMany?: MentalHealthMetricCreateManyUserInputEnvelope
  connect?: MentalHealthMetricWhereUniqueInput | MentalHealthMetricWhereUniqueInput[]
}

export type ForumPostUncheckedCreateNestedManyWithoutUserInput = {
  create?: XOR<ForumPostCreateWithoutUserInput, ForumPostUncheckedCreateWithoutUserInput> | ForumPostCreateWithoutUserInput[] | ForumPostUncheckedCreateWithoutUserInput[]
  connectOrCreate?: ForumPostCreateOrConnectWithoutUserInput | ForumPostCreateOrConnectWithoutUserInput[]
  createMany?: ForumPostCreateManyUserInputEnvelope
  connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
}

export type ForumCommentUncheckedCreateNestedManyWithoutUserInput = {
  create?: XOR<ForumCommentCreateWithoutUserInput, ForumCommentUncheckedCreateWithoutUserInput> | ForumCommentCreateWithoutUserInput[] | ForumCommentUncheckedCreateWithoutUserInput[]
  connectOrCreate?: ForumCommentCreateOrConnectWithoutUserInput | ForumCommentCreateOrConnectWithoutUserInput[]
  createMany?: ForumCommentCreateManyUserInputEnvelope
  connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
}

export type UserPreferenceUncheckedCreateNestedOneWithoutUserInput = {
  create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
  connect?: UserPreferenceWhereUniqueInput
}

export type GardenElementUncheckedCreateNestedManyWithoutUserInput = {
  create?: XOR<GardenElementCreateWithoutUserInput, GardenElementUncheckedCreateWithoutUserInput> | GardenElementCreateWithoutUserInput[] | GardenElementUncheckedCreateWithoutUserInput[]
  connectOrCreate?: GardenElementCreateOrConnectWithoutUserInput | GardenElementCreateOrConnectWithoutUserInput[]
  createMany?: GardenElementCreateManyUserInputEnvelope
  connect?: GardenElementWhereUniqueInput | GardenElementWhereUniqueInput[]
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type BoolFieldUpdateOperationsInput = {
  set?: boolean
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Date | string
}

export type MentalHealthMetricUpdateManyWithoutUserNestedInput = {
  create?: XOR<MentalHealthMetricCreateWithoutUserInput, MentalHealthMetricUncheckedCreateWithoutUserInput> | MentalHealthMetricCreateWithoutUserInput[] | MentalHealthMetricUncheckedCreateWithoutUserInput[]
  connectOrCreate?: MentalHealthMetricCreateOrConnectWithoutUserInput | MentalHealthMetricCreateOrConnectWithoutUserInput[]
  upsert?: MentalHealthMetricUpsertWithWhereUniqueWithoutUserInput | MentalHealthMetricUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: MentalHealthMetricCreateManyUserInputEnvelope
  set?: MentalHealthMetricWhereUniqueInput | MentalHealthMetricWhereUniqueInput[]
  disconnect?: MentalHealthMetricWhereUniqueInput | MentalHealthMetricWhereUniqueInput[]
  delete?: MentalHealthMetricWhereUniqueInput | MentalHealthMetricWhereUniqueInput[]
  connect?: MentalHealthMetricWhereUniqueInput | MentalHealthMetricWhereUniqueInput[]
  update?: MentalHealthMetricUpdateWithWhereUniqueWithoutUserInput | MentalHealthMetricUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: MentalHealthMetricUpdateManyWithWhereWithoutUserInput | MentalHealthMetricUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: MentalHealthMetricScalarWhereInput | MentalHealthMetricScalarWhereInput[]
}

export type ForumPostUpdateManyWithoutUserNestedInput = {
  create?: XOR<ForumPostCreateWithoutUserInput, ForumPostUncheckedCreateWithoutUserInput> | ForumPostCreateWithoutUserInput[] | ForumPostUncheckedCreateWithoutUserInput[]
  connectOrCreate?: ForumPostCreateOrConnectWithoutUserInput | ForumPostCreateOrConnectWithoutUserInput[]
  upsert?: ForumPostUpsertWithWhereUniqueWithoutUserInput | ForumPostUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: ForumPostCreateManyUserInputEnvelope
  set?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  disconnect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  delete?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  update?: ForumPostUpdateWithWhereUniqueWithoutUserInput | ForumPostUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: ForumPostUpdateManyWithWhereWithoutUserInput | ForumPostUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
}

export type ForumCommentUpdateManyWithoutUserNestedInput = {
  create?: XOR<ForumCommentCreateWithoutUserInput, ForumCommentUncheckedCreateWithoutUserInput> | ForumCommentCreateWithoutUserInput[] | ForumCommentUncheckedCreateWithoutUserInput[]
  connectOrCreate?: ForumCommentCreateOrConnectWithoutUserInput | ForumCommentCreateOrConnectWithoutUserInput[]
  upsert?: ForumCommentUpsertWithWhereUniqueWithoutUserInput | ForumCommentUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: ForumCommentCreateManyUserInputEnvelope
  set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  update?: ForumCommentUpdateWithWhereUniqueWithoutUserInput | ForumCommentUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: ForumCommentUpdateManyWithWhereWithoutUserInput | ForumCommentUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
}

export type UserPreferenceUpdateOneWithoutUserNestedInput = {
  create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
  upsert?: UserPreferenceUpsertWithoutUserInput
  disconnect?: UserPreferenceWhereInput | boolean
  delete?: UserPreferenceWhereInput | boolean
  connect?: UserPreferenceWhereUniqueInput
  update?: XOR<XOR<UserPreferenceUpdateToOneWithWhereWithoutUserInput, UserPreferenceUpdateWithoutUserInput>, UserPreferenceUncheckedUpdateWithoutUserInput>
}

export type GardenElementUpdateManyWithoutUserNestedInput = {
  create?: XOR<GardenElementCreateWithoutUserInput, GardenElementUncheckedCreateWithoutUserInput> | GardenElementCreateWithoutUserInput[] | GardenElementUncheckedCreateWithoutUserInput[]
  connectOrCreate?: GardenElementCreateOrConnectWithoutUserInput | GardenElementCreateOrConnectWithoutUserInput[]
  upsert?: GardenElementUpsertWithWhereUniqueWithoutUserInput | GardenElementUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: GardenElementCreateManyUserInputEnvelope
  set?: GardenElementWhereUniqueInput | GardenElementWhereUniqueInput[]
  disconnect?: GardenElementWhereUniqueInput | GardenElementWhereUniqueInput[]
  delete?: GardenElementWhereUniqueInput | GardenElementWhereUniqueInput[]
  connect?: GardenElementWhereUniqueInput | GardenElementWhereUniqueInput[]
  update?: GardenElementUpdateWithWhereUniqueWithoutUserInput | GardenElementUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: GardenElementUpdateManyWithWhereWithoutUserInput | GardenElementUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: GardenElementScalarWhereInput | GardenElementScalarWhereInput[]
}

export type IntFieldUpdateOperationsInput = {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export type MentalHealthMetricUncheckedUpdateManyWithoutUserNestedInput = {
  create?: XOR<MentalHealthMetricCreateWithoutUserInput, MentalHealthMetricUncheckedCreateWithoutUserInput> | MentalHealthMetricCreateWithoutUserInput[] | MentalHealthMetricUncheckedCreateWithoutUserInput[]
  connectOrCreate?: MentalHealthMetricCreateOrConnectWithoutUserInput | MentalHealthMetricCreateOrConnectWithoutUserInput[]
  upsert?: MentalHealthMetricUpsertWithWhereUniqueWithoutUserInput | MentalHealthMetricUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: MentalHealthMetricCreateManyUserInputEnvelope
  set?: MentalHealthMetricWhereUniqueInput | MentalHealthMetricWhereUniqueInput[]
  disconnect?: MentalHealthMetricWhereUniqueInput | MentalHealthMetricWhereUniqueInput[]
  delete?: MentalHealthMetricWhereUniqueInput | MentalHealthMetricWhereUniqueInput[]
  connect?: MentalHealthMetricWhereUniqueInput | MentalHealthMetricWhereUniqueInput[]
  update?: MentalHealthMetricUpdateWithWhereUniqueWithoutUserInput | MentalHealthMetricUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: MentalHealthMetricUpdateManyWithWhereWithoutUserInput | MentalHealthMetricUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: MentalHealthMetricScalarWhereInput | MentalHealthMetricScalarWhereInput[]
}

export type ForumPostUncheckedUpdateManyWithoutUserNestedInput = {
  create?: XOR<ForumPostCreateWithoutUserInput, ForumPostUncheckedCreateWithoutUserInput> | ForumPostCreateWithoutUserInput[] | ForumPostUncheckedCreateWithoutUserInput[]
  connectOrCreate?: ForumPostCreateOrConnectWithoutUserInput | ForumPostCreateOrConnectWithoutUserInput[]
  upsert?: ForumPostUpsertWithWhereUniqueWithoutUserInput | ForumPostUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: ForumPostCreateManyUserInputEnvelope
  set?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  disconnect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  delete?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  update?: ForumPostUpdateWithWhereUniqueWithoutUserInput | ForumPostUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: ForumPostUpdateManyWithWhereWithoutUserInput | ForumPostUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
}

export type ForumCommentUncheckedUpdateManyWithoutUserNestedInput = {
  create?: XOR<ForumCommentCreateWithoutUserInput, ForumCommentUncheckedCreateWithoutUserInput> | ForumCommentCreateWithoutUserInput[] | ForumCommentUncheckedCreateWithoutUserInput[]
  connectOrCreate?: ForumCommentCreateOrConnectWithoutUserInput | ForumCommentCreateOrConnectWithoutUserInput[]
  upsert?: ForumCommentUpsertWithWhereUniqueWithoutUserInput | ForumCommentUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: ForumCommentCreateManyUserInputEnvelope
  set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  update?: ForumCommentUpdateWithWhereUniqueWithoutUserInput | ForumCommentUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: ForumCommentUpdateManyWithWhereWithoutUserInput | ForumCommentUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
}

export type UserPreferenceUncheckedUpdateOneWithoutUserNestedInput = {
  create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
  upsert?: UserPreferenceUpsertWithoutUserInput
  disconnect?: UserPreferenceWhereInput | boolean
  delete?: UserPreferenceWhereInput | boolean
  connect?: UserPreferenceWhereUniqueInput
  update?: XOR<XOR<UserPreferenceUpdateToOneWithWhereWithoutUserInput, UserPreferenceUpdateWithoutUserInput>, UserPreferenceUncheckedUpdateWithoutUserInput>
}

export type GardenElementUncheckedUpdateManyWithoutUserNestedInput = {
  create?: XOR<GardenElementCreateWithoutUserInput, GardenElementUncheckedCreateWithoutUserInput> | GardenElementCreateWithoutUserInput[] | GardenElementUncheckedCreateWithoutUserInput[]
  connectOrCreate?: GardenElementCreateOrConnectWithoutUserInput | GardenElementCreateOrConnectWithoutUserInput[]
  upsert?: GardenElementUpsertWithWhereUniqueWithoutUserInput | GardenElementUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: GardenElementCreateManyUserInputEnvelope
  set?: GardenElementWhereUniqueInput | GardenElementWhereUniqueInput[]
  disconnect?: GardenElementWhereUniqueInput | GardenElementWhereUniqueInput[]
  delete?: GardenElementWhereUniqueInput | GardenElementWhereUniqueInput[]
  connect?: GardenElementWhereUniqueInput | GardenElementWhereUniqueInput[]
  update?: GardenElementUpdateWithWhereUniqueWithoutUserInput | GardenElementUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: GardenElementUpdateManyWithWhereWithoutUserInput | GardenElementUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: GardenElementScalarWhereInput | GardenElementScalarWhereInput[]
}

export type UserCreateNestedOneWithoutMentalHealthMetricsInput = {
  create?: XOR<UserCreateWithoutMentalHealthMetricsInput, UserUncheckedCreateWithoutMentalHealthMetricsInput>
  connectOrCreate?: UserCreateOrConnectWithoutMentalHealthMetricsInput
  connect?: UserWhereUniqueInput
}

export type NullableIntFieldUpdateOperationsInput = {
  set?: number | null
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: string | null
}

export type UserUpdateOneRequiredWithoutMentalHealthMetricsNestedInput = {
  create?: XOR<UserCreateWithoutMentalHealthMetricsInput, UserUncheckedCreateWithoutMentalHealthMetricsInput>
  connectOrCreate?: UserCreateOrConnectWithoutMentalHealthMetricsInput
  upsert?: UserUpsertWithoutMentalHealthMetricsInput
  connect?: UserWhereUniqueInput
  update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentalHealthMetricsInput, UserUpdateWithoutMentalHealthMetricsInput>, UserUncheckedUpdateWithoutMentalHealthMetricsInput>
}

export type ForumPostCreateNestedManyWithoutCategoryInput = {
  create?: XOR<ForumPostCreateWithoutCategoryInput, ForumPostUncheckedCreateWithoutCategoryInput> | ForumPostCreateWithoutCategoryInput[] | ForumPostUncheckedCreateWithoutCategoryInput[]
  connectOrCreate?: ForumPostCreateOrConnectWithoutCategoryInput | ForumPostCreateOrConnectWithoutCategoryInput[]
  createMany?: ForumPostCreateManyCategoryInputEnvelope
  connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
}

export type ForumPostUncheckedCreateNestedManyWithoutCategoryInput = {
  create?: XOR<ForumPostCreateWithoutCategoryInput, ForumPostUncheckedCreateWithoutCategoryInput> | ForumPostCreateWithoutCategoryInput[] | ForumPostUncheckedCreateWithoutCategoryInput[]
  connectOrCreate?: ForumPostCreateOrConnectWithoutCategoryInput | ForumPostCreateOrConnectWithoutCategoryInput[]
  createMany?: ForumPostCreateManyCategoryInputEnvelope
  connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
}

export type ForumPostUpdateManyWithoutCategoryNestedInput = {
  create?: XOR<ForumPostCreateWithoutCategoryInput, ForumPostUncheckedCreateWithoutCategoryInput> | ForumPostCreateWithoutCategoryInput[] | ForumPostUncheckedCreateWithoutCategoryInput[]
  connectOrCreate?: ForumPostCreateOrConnectWithoutCategoryInput | ForumPostCreateOrConnectWithoutCategoryInput[]
  upsert?: ForumPostUpsertWithWhereUniqueWithoutCategoryInput | ForumPostUpsertWithWhereUniqueWithoutCategoryInput[]
  createMany?: ForumPostCreateManyCategoryInputEnvelope
  set?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  disconnect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  delete?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  update?: ForumPostUpdateWithWhereUniqueWithoutCategoryInput | ForumPostUpdateWithWhereUniqueWithoutCategoryInput[]
  updateMany?: ForumPostUpdateManyWithWhereWithoutCategoryInput | ForumPostUpdateManyWithWhereWithoutCategoryInput[]
  deleteMany?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
}

export type ForumPostUncheckedUpdateManyWithoutCategoryNestedInput = {
  create?: XOR<ForumPostCreateWithoutCategoryInput, ForumPostUncheckedCreateWithoutCategoryInput> | ForumPostCreateWithoutCategoryInput[] | ForumPostUncheckedCreateWithoutCategoryInput[]
  connectOrCreate?: ForumPostCreateOrConnectWithoutCategoryInput | ForumPostCreateOrConnectWithoutCategoryInput[]
  upsert?: ForumPostUpsertWithWhereUniqueWithoutCategoryInput | ForumPostUpsertWithWhereUniqueWithoutCategoryInput[]
  createMany?: ForumPostCreateManyCategoryInputEnvelope
  set?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  disconnect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  delete?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  connect?: ForumPostWhereUniqueInput | ForumPostWhereUniqueInput[]
  update?: ForumPostUpdateWithWhereUniqueWithoutCategoryInput | ForumPostUpdateWithWhereUniqueWithoutCategoryInput[]
  updateMany?: ForumPostUpdateManyWithWhereWithoutCategoryInput | ForumPostUpdateManyWithWhereWithoutCategoryInput[]
  deleteMany?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
}

export type UserCreateNestedOneWithoutForumPostsInput = {
  create?: XOR<UserCreateWithoutForumPostsInput, UserUncheckedCreateWithoutForumPostsInput>
  connectOrCreate?: UserCreateOrConnectWithoutForumPostsInput
  connect?: UserWhereUniqueInput
}

export type ForumCategoryCreateNestedOneWithoutPostsInput = {
  create?: XOR<ForumCategoryCreateWithoutPostsInput, ForumCategoryUncheckedCreateWithoutPostsInput>
  connectOrCreate?: ForumCategoryCreateOrConnectWithoutPostsInput
  connect?: ForumCategoryWhereUniqueInput
}

export type ForumCommentCreateNestedManyWithoutPostInput = {
  create?: XOR<ForumCommentCreateWithoutPostInput, ForumCommentUncheckedCreateWithoutPostInput> | ForumCommentCreateWithoutPostInput[] | ForumCommentUncheckedCreateWithoutPostInput[]
  connectOrCreate?: ForumCommentCreateOrConnectWithoutPostInput | ForumCommentCreateOrConnectWithoutPostInput[]
  createMany?: ForumCommentCreateManyPostInputEnvelope
  connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
}

export type ForumCommentUncheckedCreateNestedManyWithoutPostInput = {
  create?: XOR<ForumCommentCreateWithoutPostInput, ForumCommentUncheckedCreateWithoutPostInput> | ForumCommentCreateWithoutPostInput[] | ForumCommentUncheckedCreateWithoutPostInput[]
  connectOrCreate?: ForumCommentCreateOrConnectWithoutPostInput | ForumCommentCreateOrConnectWithoutPostInput[]
  createMany?: ForumCommentCreateManyPostInputEnvelope
  connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
}

export type UserUpdateOneWithoutForumPostsNestedInput = {
  create?: XOR<UserCreateWithoutForumPostsInput, UserUncheckedCreateWithoutForumPostsInput>
  connectOrCreate?: UserCreateOrConnectWithoutForumPostsInput
  upsert?: UserUpsertWithoutForumPostsInput
  disconnect?: UserWhereInput | boolean
  delete?: UserWhereInput | boolean
  connect?: UserWhereUniqueInput
  update?: XOR<XOR<UserUpdateToOneWithWhereWithoutForumPostsInput, UserUpdateWithoutForumPostsInput>, UserUncheckedUpdateWithoutForumPostsInput>
}

export type ForumCategoryUpdateOneWithoutPostsNestedInput = {
  create?: XOR<ForumCategoryCreateWithoutPostsInput, ForumCategoryUncheckedCreateWithoutPostsInput>
  connectOrCreate?: ForumCategoryCreateOrConnectWithoutPostsInput
  upsert?: ForumCategoryUpsertWithoutPostsInput
  disconnect?: ForumCategoryWhereInput | boolean
  delete?: ForumCategoryWhereInput | boolean
  connect?: ForumCategoryWhereUniqueInput
  update?: XOR<XOR<ForumCategoryUpdateToOneWithWhereWithoutPostsInput, ForumCategoryUpdateWithoutPostsInput>, ForumCategoryUncheckedUpdateWithoutPostsInput>
}

export type ForumCommentUpdateManyWithoutPostNestedInput = {
  create?: XOR<ForumCommentCreateWithoutPostInput, ForumCommentUncheckedCreateWithoutPostInput> | ForumCommentCreateWithoutPostInput[] | ForumCommentUncheckedCreateWithoutPostInput[]
  connectOrCreate?: ForumCommentCreateOrConnectWithoutPostInput | ForumCommentCreateOrConnectWithoutPostInput[]
  upsert?: ForumCommentUpsertWithWhereUniqueWithoutPostInput | ForumCommentUpsertWithWhereUniqueWithoutPostInput[]
  createMany?: ForumCommentCreateManyPostInputEnvelope
  set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  update?: ForumCommentUpdateWithWhereUniqueWithoutPostInput | ForumCommentUpdateWithWhereUniqueWithoutPostInput[]
  updateMany?: ForumCommentUpdateManyWithWhereWithoutPostInput | ForumCommentUpdateManyWithWhereWithoutPostInput[]
  deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
}

export type ForumCommentUncheckedUpdateManyWithoutPostNestedInput = {
  create?: XOR<ForumCommentCreateWithoutPostInput, ForumCommentUncheckedCreateWithoutPostInput> | ForumCommentCreateWithoutPostInput[] | ForumCommentUncheckedCreateWithoutPostInput[]
  connectOrCreate?: ForumCommentCreateOrConnectWithoutPostInput | ForumCommentCreateOrConnectWithoutPostInput[]
  upsert?: ForumCommentUpsertWithWhereUniqueWithoutPostInput | ForumCommentUpsertWithWhereUniqueWithoutPostInput[]
  createMany?: ForumCommentCreateManyPostInputEnvelope
  set?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  disconnect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  delete?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  connect?: ForumCommentWhereUniqueInput | ForumCommentWhereUniqueInput[]
  update?: ForumCommentUpdateWithWhereUniqueWithoutPostInput | ForumCommentUpdateWithWhereUniqueWithoutPostInput[]
  updateMany?: ForumCommentUpdateManyWithWhereWithoutPostInput | ForumCommentUpdateManyWithWhereWithoutPostInput[]
  deleteMany?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
}

export type ForumPostCreateNestedOneWithoutCommentsInput = {
  create?: XOR<ForumPostCreateWithoutCommentsInput, ForumPostUncheckedCreateWithoutCommentsInput>
  connectOrCreate?: ForumPostCreateOrConnectWithoutCommentsInput
  connect?: ForumPostWhereUniqueInput
}

export type UserCreateNestedOneWithoutForumCommentsInput = {
  create?: XOR<UserCreateWithoutForumCommentsInput, UserUncheckedCreateWithoutForumCommentsInput>
  connectOrCreate?: UserCreateOrConnectWithoutForumCommentsInput
  connect?: UserWhereUniqueInput
}

export type ForumPostUpdateOneRequiredWithoutCommentsNestedInput = {
  create?: XOR<ForumPostCreateWithoutCommentsInput, ForumPostUncheckedCreateWithoutCommentsInput>
  connectOrCreate?: ForumPostCreateOrConnectWithoutCommentsInput
  upsert?: ForumPostUpsertWithoutCommentsInput
  connect?: ForumPostWhereUniqueInput
  update?: XOR<XOR<ForumPostUpdateToOneWithWhereWithoutCommentsInput, ForumPostUpdateWithoutCommentsInput>, ForumPostUncheckedUpdateWithoutCommentsInput>
}

export type UserUpdateOneWithoutForumCommentsNestedInput = {
  create?: XOR<UserCreateWithoutForumCommentsInput, UserUncheckedCreateWithoutForumCommentsInput>
  connectOrCreate?: UserCreateOrConnectWithoutForumCommentsInput
  upsert?: UserUpsertWithoutForumCommentsInput
  disconnect?: UserWhereInput | boolean
  delete?: UserWhereInput | boolean
  connect?: UserWhereUniqueInput
  update?: XOR<XOR<UserUpdateToOneWithWhereWithoutForumCommentsInput, UserUpdateWithoutForumCommentsInput>, UserUncheckedUpdateWithoutForumCommentsInput>
}

export type UserCreateNestedOneWithoutPreferencesInput = {
  create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
  connect?: UserWhereUniqueInput
}

export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
  create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
  upsert?: UserUpsertWithoutPreferencesInput
  connect?: UserWhereUniqueInput
  update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
}

export type UserCreateNestedOneWithoutGardenElementsInput = {
  create?: XOR<UserCreateWithoutGardenElementsInput, UserUncheckedCreateWithoutGardenElementsInput>
  connectOrCreate?: UserCreateOrConnectWithoutGardenElementsInput
  connect?: UserWhereUniqueInput
}

export type EnumGardenElementTypeFieldUpdateOperationsInput = {
  set?: $Enums.GardenElementType
}

export type EnumHealthStatusFieldUpdateOperationsInput = {
  set?: $Enums.HealthStatus
}

export type UserUpdateOneRequiredWithoutGardenElementsNestedInput = {
  create?: XOR<UserCreateWithoutGardenElementsInput, UserUncheckedCreateWithoutGardenElementsInput>
  connectOrCreate?: UserCreateOrConnectWithoutGardenElementsInput
  upsert?: UserUpsertWithoutGardenElementsInput
  connect?: UserWhereUniqueInput
  update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGardenElementsInput, UserUpdateWithoutGardenElementsInput>, UserUncheckedUpdateWithoutGardenElementsInput>
}

export type NestedIntFilter<$PrismaModel = never> = {
  equals?: number | IntFieldRefInput<$PrismaModel>
  in?: number[]
  notIn?: number[]
  lt?: number | IntFieldRefInput<$PrismaModel>
  lte?: number | IntFieldRefInput<$PrismaModel>
  gt?: number | IntFieldRefInput<$PrismaModel>
  gte?: number | IntFieldRefInput<$PrismaModel>
  not?: NestedIntFilter<$PrismaModel> | number
}

export type NestedStringFilter<$PrismaModel = never> = {
  equals?: string | StringFieldRefInput<$PrismaModel>
  in?: string[]
  notIn?: string[]
  lt?: string | StringFieldRefInput<$PrismaModel>
  lte?: string | StringFieldRefInput<$PrismaModel>
  gt?: string | StringFieldRefInput<$PrismaModel>
  gte?: string | StringFieldRefInput<$PrismaModel>
  contains?: string | StringFieldRefInput<$PrismaModel>
  startsWith?: string | StringFieldRefInput<$PrismaModel>
  endsWith?: string | StringFieldRefInput<$PrismaModel>
  search?: string
  not?: NestedStringFilter<$PrismaModel> | string
}

export type NestedBoolFilter<$PrismaModel = never> = {
  equals?: boolean | BooleanFieldRefInput<$PrismaModel>
  not?: NestedBoolFilter<$PrismaModel> | boolean
}

export type NestedDateTimeFilter<$PrismaModel = never> = {
  equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  in?: Date[] | string[]
  notIn?: Date[] | string[]
  lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  not?: NestedDateTimeFilter<$PrismaModel> | Date | string
}

export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
  equals?: number | IntFieldRefInput<$PrismaModel>
  in?: number[]
  notIn?: number[]
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
  in?: number[]
  notIn?: number[]
  lt?: number | FloatFieldRefInput<$PrismaModel>
  lte?: number | FloatFieldRefInput<$PrismaModel>
  gt?: number | FloatFieldRefInput<$PrismaModel>
  gte?: number | FloatFieldRefInput<$PrismaModel>
  not?: NestedFloatFilter<$PrismaModel> | number
}

export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
  equals?: string | StringFieldRefInput<$PrismaModel>
  in?: string[]
  notIn?: string[]
  lt?: string | StringFieldRefInput<$PrismaModel>
  lte?: string | StringFieldRefInput<$PrismaModel>
  gt?: string | StringFieldRefInput<$PrismaModel>
  gte?: string | StringFieldRefInput<$PrismaModel>
  contains?: string | StringFieldRefInput<$PrismaModel>
  startsWith?: string | StringFieldRefInput<$PrismaModel>
  endsWith?: string | StringFieldRefInput<$PrismaModel>
  search?: string
  not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
  _count?: NestedIntFilter<$PrismaModel>
  _min?: NestedStringFilter<$PrismaModel>
  _max?: NestedStringFilter<$PrismaModel>
}

export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
  equals?: boolean | BooleanFieldRefInput<$PrismaModel>
  not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
  _count?: NestedIntFilter<$PrismaModel>
  _min?: NestedBoolFilter<$PrismaModel>
  _max?: NestedBoolFilter<$PrismaModel>
}

export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
  equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  in?: Date[] | string[]
  notIn?: Date[] | string[]
  lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
  not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
  _count?: NestedIntFilter<$PrismaModel>
  _min?: NestedDateTimeFilter<$PrismaModel>
  _max?: NestedDateTimeFilter<$PrismaModel>
}

export type NestedIntNullableFilter<$PrismaModel = never> = {
  equals?: number | IntFieldRefInput<$PrismaModel> | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number | IntFieldRefInput<$PrismaModel>
  lte?: number | IntFieldRefInput<$PrismaModel>
  gt?: number | IntFieldRefInput<$PrismaModel>
  gte?: number | IntFieldRefInput<$PrismaModel>
  not?: NestedIntNullableFilter<$PrismaModel> | number | null
}

export type NestedStringNullableFilter<$PrismaModel = never> = {
  equals?: string | StringFieldRefInput<$PrismaModel> | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string | StringFieldRefInput<$PrismaModel>
  lte?: string | StringFieldRefInput<$PrismaModel>
  gt?: string | StringFieldRefInput<$PrismaModel>
  gte?: string | StringFieldRefInput<$PrismaModel>
  contains?: string | StringFieldRefInput<$PrismaModel>
  startsWith?: string | StringFieldRefInput<$PrismaModel>
  endsWith?: string | StringFieldRefInput<$PrismaModel>
  search?: string
  not?: NestedStringNullableFilter<$PrismaModel> | string | null
}

export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
  equals?: number | IntFieldRefInput<$PrismaModel> | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number | IntFieldRefInput<$PrismaModel>
  lte?: number | IntFieldRefInput<$PrismaModel>
  gt?: number | IntFieldRefInput<$PrismaModel>
  gte?: number | IntFieldRefInput<$PrismaModel>
  not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
  _count?: NestedIntNullableFilter<$PrismaModel>
  _avg?: NestedFloatNullableFilter<$PrismaModel>
  _sum?: NestedIntNullableFilter<$PrismaModel>
  _min?: NestedIntNullableFilter<$PrismaModel>
  _max?: NestedIntNullableFilter<$PrismaModel>
}

export type NestedFloatNullableFilter<$PrismaModel = never> = {
  equals?: number | FloatFieldRefInput<$PrismaModel> | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number | FloatFieldRefInput<$PrismaModel>
  lte?: number | FloatFieldRefInput<$PrismaModel>
  gt?: number | FloatFieldRefInput<$PrismaModel>
  gte?: number | FloatFieldRefInput<$PrismaModel>
  not?: NestedFloatNullableFilter<$PrismaModel> | number | null
}

export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
  equals?: string | StringFieldRefInput<$PrismaModel> | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string | StringFieldRefInput<$PrismaModel>
  lte?: string | StringFieldRefInput<$PrismaModel>
  gt?: string | StringFieldRefInput<$PrismaModel>
  gte?: string | StringFieldRefInput<$PrismaModel>
  contains?: string | StringFieldRefInput<$PrismaModel>
  startsWith?: string | StringFieldRefInput<$PrismaModel>
  endsWith?: string | StringFieldRefInput<$PrismaModel>
  search?: string
  not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
  _count?: NestedIntNullableFilter<$PrismaModel>
  _min?: NestedStringNullableFilter<$PrismaModel>
  _max?: NestedStringNullableFilter<$PrismaModel>
}
export type NestedJsonNullableFilter<$PrismaModel = never> =
  | PatchUndefined<
    Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
    Required<NestedJsonNullableFilterBase<$PrismaModel>>
  >
  | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
  equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  path?: string
  mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
  string_contains?: string | StringFieldRefInput<$PrismaModel>
  string_starts_with?: string | StringFieldRefInput<$PrismaModel>
  string_ends_with?: string | StringFieldRefInput<$PrismaModel>
  array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
  array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
  array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
  lt?: InputJsonValue
  lte?: InputJsonValue
  gt?: InputJsonValue
  gte?: InputJsonValue
  not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
}

export type NestedEnumGardenElementTypeFilter<$PrismaModel = never> = {
  equals?: $Enums.GardenElementType | EnumGardenElementTypeFieldRefInput<$PrismaModel>
  in?: $Enums.GardenElementType[]
  notIn?: $Enums.GardenElementType[]
  not?: NestedEnumGardenElementTypeFilter<$PrismaModel> | $Enums.GardenElementType
}

export type NestedEnumHealthStatusFilter<$PrismaModel = never> = {
  equals?: $Enums.HealthStatus | EnumHealthStatusFieldRefInput<$PrismaModel>
  in?: $Enums.HealthStatus[]
  notIn?: $Enums.HealthStatus[]
  not?: NestedEnumHealthStatusFilter<$PrismaModel> | $Enums.HealthStatus
}

export type NestedEnumGardenElementTypeWithAggregatesFilter<$PrismaModel = never> = {
  equals?: $Enums.GardenElementType | EnumGardenElementTypeFieldRefInput<$PrismaModel>
  in?: $Enums.GardenElementType[]
  notIn?: $Enums.GardenElementType[]
  not?: NestedEnumGardenElementTypeWithAggregatesFilter<$PrismaModel> | $Enums.GardenElementType
  _count?: NestedIntFilter<$PrismaModel>
  _min?: NestedEnumGardenElementTypeFilter<$PrismaModel>
  _max?: NestedEnumGardenElementTypeFilter<$PrismaModel>
}

export type NestedEnumHealthStatusWithAggregatesFilter<$PrismaModel = never> = {
  equals?: $Enums.HealthStatus | EnumHealthStatusFieldRefInput<$PrismaModel>
  in?: $Enums.HealthStatus[]
  notIn?: $Enums.HealthStatus[]
  not?: NestedEnumHealthStatusWithAggregatesFilter<$PrismaModel> | $Enums.HealthStatus
  _count?: NestedIntFilter<$PrismaModel>
  _min?: NestedEnumHealthStatusFilter<$PrismaModel>
  _max?: NestedEnumHealthStatusFilter<$PrismaModel>
}

export type MentalHealthMetricCreateWithoutUserInput = {
  metricDate: Date | string
  mood: number
  anxietyLevel?: number | null
  stressLevel?: number | null
  notes?: string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: Date | string
}

export type MentalHealthMetricUncheckedCreateWithoutUserInput = {
  id?: number
  metricDate: Date | string
  mood: number
  anxietyLevel?: number | null
  stressLevel?: number | null
  notes?: string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: Date | string
}

export type MentalHealthMetricCreateOrConnectWithoutUserInput = {
  where: MentalHealthMetricWhereUniqueInput
  create: XOR<MentalHealthMetricCreateWithoutUserInput, MentalHealthMetricUncheckedCreateWithoutUserInput>
}

export type MentalHealthMetricCreateManyUserInputEnvelope = {
  data: MentalHealthMetricCreateManyUserInput | MentalHealthMetricCreateManyUserInput[]
  skipDuplicates?: boolean
}

export type ForumPostCreateWithoutUserInput = {
  title: string
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  category?: ForumCategoryCreateNestedOneWithoutPostsInput
  comments?: ForumCommentCreateNestedManyWithoutPostInput
}

export type ForumPostUncheckedCreateWithoutUserInput = {
  id?: number
  categoryId?: number | null
  title: string
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  comments?: ForumCommentUncheckedCreateNestedManyWithoutPostInput
}

export type ForumPostCreateOrConnectWithoutUserInput = {
  where: ForumPostWhereUniqueInput
  create: XOR<ForumPostCreateWithoutUserInput, ForumPostUncheckedCreateWithoutUserInput>
}

export type ForumPostCreateManyUserInputEnvelope = {
  data: ForumPostCreateManyUserInput | ForumPostCreateManyUserInput[]
  skipDuplicates?: boolean
}

export type ForumCommentCreateWithoutUserInput = {
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  post: ForumPostCreateNestedOneWithoutCommentsInput
}

export type ForumCommentUncheckedCreateWithoutUserInput = {
  id?: number
  postId: number
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
}

export type ForumCommentCreateOrConnectWithoutUserInput = {
  where: ForumCommentWhereUniqueInput
  create: XOR<ForumCommentCreateWithoutUserInput, ForumCommentUncheckedCreateWithoutUserInput>
}

export type ForumCommentCreateManyUserInputEnvelope = {
  data: ForumCommentCreateManyUserInput | ForumCommentCreateManyUserInput[]
  skipDuplicates?: boolean
}

export type UserPreferenceCreateWithoutUserInput = {
  privacySetting?: string
  notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
  languagePreference?: string
  accessibilityOptions?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type UserPreferenceUncheckedCreateWithoutUserInput = {
  id?: number
  privacySetting?: string
  notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
  languagePreference?: string
  accessibilityOptions?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type UserPreferenceCreateOrConnectWithoutUserInput = {
  where: UserPreferenceWhereUniqueInput
  create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
}

export type GardenElementCreateWithoutUserInput = {
  type: $Enums.GardenElementType
  name: string
  description?: string | null
  plantedDate?: Date | string
  lastWateredDate?: Date | string
  growthStage?: number
  healthStatus?: $Enums.HealthStatus
  positionX: number
  positionY: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type GardenElementUncheckedCreateWithoutUserInput = {
  id?: number
  type: $Enums.GardenElementType
  name: string
  description?: string | null
  plantedDate?: Date | string
  lastWateredDate?: Date | string
  growthStage?: number
  healthStatus?: $Enums.HealthStatus
  positionX: number
  positionY: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type GardenElementCreateOrConnectWithoutUserInput = {
  where: GardenElementWhereUniqueInput
  create: XOR<GardenElementCreateWithoutUserInput, GardenElementUncheckedCreateWithoutUserInput>
}

export type GardenElementCreateManyUserInputEnvelope = {
  data: GardenElementCreateManyUserInput | GardenElementCreateManyUserInput[]
  skipDuplicates?: boolean
}

export type MentalHealthMetricUpsertWithWhereUniqueWithoutUserInput = {
  where: MentalHealthMetricWhereUniqueInput
  update: XOR<MentalHealthMetricUpdateWithoutUserInput, MentalHealthMetricUncheckedUpdateWithoutUserInput>
  create: XOR<MentalHealthMetricCreateWithoutUserInput, MentalHealthMetricUncheckedCreateWithoutUserInput>
}

export type MentalHealthMetricUpdateWithWhereUniqueWithoutUserInput = {
  where: MentalHealthMetricWhereUniqueInput
  data: XOR<MentalHealthMetricUpdateWithoutUserInput, MentalHealthMetricUncheckedUpdateWithoutUserInput>
}

export type MentalHealthMetricUpdateManyWithWhereWithoutUserInput = {
  where: MentalHealthMetricScalarWhereInput
  data: XOR<MentalHealthMetricUpdateManyMutationInput, MentalHealthMetricUncheckedUpdateManyWithoutUserInput>
}

export type MentalHealthMetricScalarWhereInput = {
  AND?: MentalHealthMetricScalarWhereInput | MentalHealthMetricScalarWhereInput[]
  OR?: MentalHealthMetricScalarWhereInput[]
  NOT?: MentalHealthMetricScalarWhereInput | MentalHealthMetricScalarWhereInput[]
  id?: IntFilter<"MentalHealthMetric"> | number
  userId?: IntFilter<"MentalHealthMetric"> | number
  metricDate?: DateTimeFilter<"MentalHealthMetric"> | Date | string
  mood?: IntFilter<"MentalHealthMetric"> | number
  anxietyLevel?: IntNullableFilter<"MentalHealthMetric"> | number | null
  stressLevel?: IntNullableFilter<"MentalHealthMetric"> | number | null
  notes?: StringNullableFilter<"MentalHealthMetric"> | string | null
  activities?: JsonNullableFilter<"MentalHealthMetric">
  createdAt?: DateTimeFilter<"MentalHealthMetric"> | Date | string
}

export type ForumPostUpsertWithWhereUniqueWithoutUserInput = {
  where: ForumPostWhereUniqueInput
  update: XOR<ForumPostUpdateWithoutUserInput, ForumPostUncheckedUpdateWithoutUserInput>
  create: XOR<ForumPostCreateWithoutUserInput, ForumPostUncheckedCreateWithoutUserInput>
}

export type ForumPostUpdateWithWhereUniqueWithoutUserInput = {
  where: ForumPostWhereUniqueInput
  data: XOR<ForumPostUpdateWithoutUserInput, ForumPostUncheckedUpdateWithoutUserInput>
}

export type ForumPostUpdateManyWithWhereWithoutUserInput = {
  where: ForumPostScalarWhereInput
  data: XOR<ForumPostUpdateManyMutationInput, ForumPostUncheckedUpdateManyWithoutUserInput>
}

export type ForumPostScalarWhereInput = {
  AND?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
  OR?: ForumPostScalarWhereInput[]
  NOT?: ForumPostScalarWhereInput | ForumPostScalarWhereInput[]
  id?: IntFilter<"ForumPost"> | number
  userId?: IntNullableFilter<"ForumPost"> | number | null
  categoryId?: IntNullableFilter<"ForumPost"> | number | null
  title?: StringFilter<"ForumPost"> | string
  content?: StringFilter<"ForumPost"> | string
  isAnonymous?: BoolFilter<"ForumPost"> | boolean
  createdAt?: DateTimeFilter<"ForumPost"> | Date | string
  updatedAt?: DateTimeFilter<"ForumPost"> | Date | string
}

export type ForumCommentUpsertWithWhereUniqueWithoutUserInput = {
  where: ForumCommentWhereUniqueInput
  update: XOR<ForumCommentUpdateWithoutUserInput, ForumCommentUncheckedUpdateWithoutUserInput>
  create: XOR<ForumCommentCreateWithoutUserInput, ForumCommentUncheckedCreateWithoutUserInput>
}

export type ForumCommentUpdateWithWhereUniqueWithoutUserInput = {
  where: ForumCommentWhereUniqueInput
  data: XOR<ForumCommentUpdateWithoutUserInput, ForumCommentUncheckedUpdateWithoutUserInput>
}

export type ForumCommentUpdateManyWithWhereWithoutUserInput = {
  where: ForumCommentScalarWhereInput
  data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyWithoutUserInput>
}

export type ForumCommentScalarWhereInput = {
  AND?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  OR?: ForumCommentScalarWhereInput[]
  NOT?: ForumCommentScalarWhereInput | ForumCommentScalarWhereInput[]
  id?: IntFilter<"ForumComment"> | number
  postId?: IntFilter<"ForumComment"> | number
  userId?: IntNullableFilter<"ForumComment"> | number | null
  content?: StringFilter<"ForumComment"> | string
  isAnonymous?: BoolFilter<"ForumComment"> | boolean
  createdAt?: DateTimeFilter<"ForumComment"> | Date | string
}

export type UserPreferenceUpsertWithoutUserInput = {
  update: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
  create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  where?: UserPreferenceWhereInput
}

export type UserPreferenceUpdateToOneWithWhereWithoutUserInput = {
  where?: UserPreferenceWhereInput
  data: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
}

export type UserPreferenceUpdateWithoutUserInput = {
  privacySetting?: StringFieldUpdateOperationsInput | string
  notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
  languagePreference?: StringFieldUpdateOperationsInput | string
  accessibilityOptions?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type UserPreferenceUncheckedUpdateWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput | number
  privacySetting?: StringFieldUpdateOperationsInput | string
  notificationPreferences?: NullableJsonNullValueInput | InputJsonValue
  languagePreference?: StringFieldUpdateOperationsInput | string
  accessibilityOptions?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type GardenElementUpsertWithWhereUniqueWithoutUserInput = {
  where: GardenElementWhereUniqueInput
  update: XOR<GardenElementUpdateWithoutUserInput, GardenElementUncheckedUpdateWithoutUserInput>
  create: XOR<GardenElementCreateWithoutUserInput, GardenElementUncheckedCreateWithoutUserInput>
}

export type GardenElementUpdateWithWhereUniqueWithoutUserInput = {
  where: GardenElementWhereUniqueInput
  data: XOR<GardenElementUpdateWithoutUserInput, GardenElementUncheckedUpdateWithoutUserInput>
}

export type GardenElementUpdateManyWithWhereWithoutUserInput = {
  where: GardenElementScalarWhereInput
  data: XOR<GardenElementUpdateManyMutationInput, GardenElementUncheckedUpdateManyWithoutUserInput>
}

export type GardenElementScalarWhereInput = {
  AND?: GardenElementScalarWhereInput | GardenElementScalarWhereInput[]
  OR?: GardenElementScalarWhereInput[]
  NOT?: GardenElementScalarWhereInput | GardenElementScalarWhereInput[]
  id?: IntFilter<"GardenElement"> | number
  userId?: IntFilter<"GardenElement"> | number
  type?: EnumGardenElementTypeFilter<"GardenElement"> | $Enums.GardenElementType
  name?: StringFilter<"GardenElement"> | string
  description?: StringNullableFilter<"GardenElement"> | string | null
  plantedDate?: DateTimeFilter<"GardenElement"> | Date | string
  lastWateredDate?: DateTimeFilter<"GardenElement"> | Date | string
  growthStage?: IntFilter<"GardenElement"> | number
  healthStatus?: EnumHealthStatusFilter<"GardenElement"> | $Enums.HealthStatus
  positionX?: IntFilter<"GardenElement"> | number
  positionY?: IntFilter<"GardenElement"> | number
  createdAt?: DateTimeFilter<"GardenElement"> | Date | string
  updatedAt?: DateTimeFilter<"GardenElement"> | Date | string
}

export type UserCreateWithoutMentalHealthMetricsInput = {
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  forumPosts?: ForumPostCreateNestedManyWithoutUserInput
  forumComments?: ForumCommentCreateNestedManyWithoutUserInput
  preferences?: UserPreferenceCreateNestedOneWithoutUserInput
  gardenElements?: GardenElementCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutMentalHealthMetricsInput = {
  id?: number
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  forumPosts?: ForumPostUncheckedCreateNestedManyWithoutUserInput
  forumComments?: ForumCommentUncheckedCreateNestedManyWithoutUserInput
  preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  gardenElements?: GardenElementUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutMentalHealthMetricsInput = {
  where: UserWhereUniqueInput
  create: XOR<UserCreateWithoutMentalHealthMetricsInput, UserUncheckedCreateWithoutMentalHealthMetricsInput>
}

export type UserUpsertWithoutMentalHealthMetricsInput = {
  update: XOR<UserUpdateWithoutMentalHealthMetricsInput, UserUncheckedUpdateWithoutMentalHealthMetricsInput>
  create: XOR<UserCreateWithoutMentalHealthMetricsInput, UserUncheckedCreateWithoutMentalHealthMetricsInput>
  where?: UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutMentalHealthMetricsInput = {
  where?: UserWhereInput
  data: XOR<UserUpdateWithoutMentalHealthMetricsInput, UserUncheckedUpdateWithoutMentalHealthMetricsInput>
}

export type UserUpdateWithoutMentalHealthMetricsInput = {
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  forumPosts?: ForumPostUpdateManyWithoutUserNestedInput
  forumComments?: ForumCommentUpdateManyWithoutUserNestedInput
  preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
  gardenElements?: GardenElementUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutMentalHealthMetricsInput = {
  id?: IntFieldUpdateOperationsInput | number
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  forumPosts?: ForumPostUncheckedUpdateManyWithoutUserNestedInput
  forumComments?: ForumCommentUncheckedUpdateManyWithoutUserNestedInput
  preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  gardenElements?: GardenElementUncheckedUpdateManyWithoutUserNestedInput
}

export type ForumPostCreateWithoutCategoryInput = {
  title: string
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  user?: UserCreateNestedOneWithoutForumPostsInput
  comments?: ForumCommentCreateNestedManyWithoutPostInput
}

export type ForumPostUncheckedCreateWithoutCategoryInput = {
  id?: number
  userId?: number | null
  title: string
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  comments?: ForumCommentUncheckedCreateNestedManyWithoutPostInput
}

export type ForumPostCreateOrConnectWithoutCategoryInput = {
  where: ForumPostWhereUniqueInput
  create: XOR<ForumPostCreateWithoutCategoryInput, ForumPostUncheckedCreateWithoutCategoryInput>
}

export type ForumPostCreateManyCategoryInputEnvelope = {
  data: ForumPostCreateManyCategoryInput | ForumPostCreateManyCategoryInput[]
  skipDuplicates?: boolean
}

export type ForumPostUpsertWithWhereUniqueWithoutCategoryInput = {
  where: ForumPostWhereUniqueInput
  update: XOR<ForumPostUpdateWithoutCategoryInput, ForumPostUncheckedUpdateWithoutCategoryInput>
  create: XOR<ForumPostCreateWithoutCategoryInput, ForumPostUncheckedCreateWithoutCategoryInput>
}

export type ForumPostUpdateWithWhereUniqueWithoutCategoryInput = {
  where: ForumPostWhereUniqueInput
  data: XOR<ForumPostUpdateWithoutCategoryInput, ForumPostUncheckedUpdateWithoutCategoryInput>
}

export type ForumPostUpdateManyWithWhereWithoutCategoryInput = {
  where: ForumPostScalarWhereInput
  data: XOR<ForumPostUpdateManyMutationInput, ForumPostUncheckedUpdateManyWithoutCategoryInput>
}

export type UserCreateWithoutForumPostsInput = {
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  mentalHealthMetrics?: MentalHealthMetricCreateNestedManyWithoutUserInput
  forumComments?: ForumCommentCreateNestedManyWithoutUserInput
  preferences?: UserPreferenceCreateNestedOneWithoutUserInput
  gardenElements?: GardenElementCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutForumPostsInput = {
  id?: number
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  mentalHealthMetrics?: MentalHealthMetricUncheckedCreateNestedManyWithoutUserInput
  forumComments?: ForumCommentUncheckedCreateNestedManyWithoutUserInput
  preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  gardenElements?: GardenElementUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutForumPostsInput = {
  where: UserWhereUniqueInput
  create: XOR<UserCreateWithoutForumPostsInput, UserUncheckedCreateWithoutForumPostsInput>
}

export type ForumCategoryCreateWithoutPostsInput = {
  name: string
}

export type ForumCategoryUncheckedCreateWithoutPostsInput = {
  id?: number
  name: string
}

export type ForumCategoryCreateOrConnectWithoutPostsInput = {
  where: ForumCategoryWhereUniqueInput
  create: XOR<ForumCategoryCreateWithoutPostsInput, ForumCategoryUncheckedCreateWithoutPostsInput>
}

export type ForumCommentCreateWithoutPostInput = {
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  user?: UserCreateNestedOneWithoutForumCommentsInput
}

export type ForumCommentUncheckedCreateWithoutPostInput = {
  id?: number
  userId?: number | null
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
}

export type ForumCommentCreateOrConnectWithoutPostInput = {
  where: ForumCommentWhereUniqueInput
  create: XOR<ForumCommentCreateWithoutPostInput, ForumCommentUncheckedCreateWithoutPostInput>
}

export type ForumCommentCreateManyPostInputEnvelope = {
  data: ForumCommentCreateManyPostInput | ForumCommentCreateManyPostInput[]
  skipDuplicates?: boolean
}

export type UserUpsertWithoutForumPostsInput = {
  update: XOR<UserUpdateWithoutForumPostsInput, UserUncheckedUpdateWithoutForumPostsInput>
  create: XOR<UserCreateWithoutForumPostsInput, UserUncheckedCreateWithoutForumPostsInput>
  where?: UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutForumPostsInput = {
  where?: UserWhereInput
  data: XOR<UserUpdateWithoutForumPostsInput, UserUncheckedUpdateWithoutForumPostsInput>
}

export type UserUpdateWithoutForumPostsInput = {
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  mentalHealthMetrics?: MentalHealthMetricUpdateManyWithoutUserNestedInput
  forumComments?: ForumCommentUpdateManyWithoutUserNestedInput
  preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
  gardenElements?: GardenElementUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutForumPostsInput = {
  id?: IntFieldUpdateOperationsInput | number
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  mentalHealthMetrics?: MentalHealthMetricUncheckedUpdateManyWithoutUserNestedInput
  forumComments?: ForumCommentUncheckedUpdateManyWithoutUserNestedInput
  preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  gardenElements?: GardenElementUncheckedUpdateManyWithoutUserNestedInput
}

export type ForumCategoryUpsertWithoutPostsInput = {
  update: XOR<ForumCategoryUpdateWithoutPostsInput, ForumCategoryUncheckedUpdateWithoutPostsInput>
  create: XOR<ForumCategoryCreateWithoutPostsInput, ForumCategoryUncheckedCreateWithoutPostsInput>
  where?: ForumCategoryWhereInput
}

export type ForumCategoryUpdateToOneWithWhereWithoutPostsInput = {
  where?: ForumCategoryWhereInput
  data: XOR<ForumCategoryUpdateWithoutPostsInput, ForumCategoryUncheckedUpdateWithoutPostsInput>
}

export type ForumCategoryUpdateWithoutPostsInput = {
  name?: StringFieldUpdateOperationsInput | string
}

export type ForumCategoryUncheckedUpdateWithoutPostsInput = {
  id?: IntFieldUpdateOperationsInput | number
  name?: StringFieldUpdateOperationsInput | string
}

export type ForumCommentUpsertWithWhereUniqueWithoutPostInput = {
  where: ForumCommentWhereUniqueInput
  update: XOR<ForumCommentUpdateWithoutPostInput, ForumCommentUncheckedUpdateWithoutPostInput>
  create: XOR<ForumCommentCreateWithoutPostInput, ForumCommentUncheckedCreateWithoutPostInput>
}

export type ForumCommentUpdateWithWhereUniqueWithoutPostInput = {
  where: ForumCommentWhereUniqueInput
  data: XOR<ForumCommentUpdateWithoutPostInput, ForumCommentUncheckedUpdateWithoutPostInput>
}

export type ForumCommentUpdateManyWithWhereWithoutPostInput = {
  where: ForumCommentScalarWhereInput
  data: XOR<ForumCommentUpdateManyMutationInput, ForumCommentUncheckedUpdateManyWithoutPostInput>
}

export type ForumPostCreateWithoutCommentsInput = {
  title: string
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  user?: UserCreateNestedOneWithoutForumPostsInput
  category?: ForumCategoryCreateNestedOneWithoutPostsInput
}

export type ForumPostUncheckedCreateWithoutCommentsInput = {
  id?: number
  userId?: number | null
  categoryId?: number | null
  title: string
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ForumPostCreateOrConnectWithoutCommentsInput = {
  where: ForumPostWhereUniqueInput
  create: XOR<ForumPostCreateWithoutCommentsInput, ForumPostUncheckedCreateWithoutCommentsInput>
}

export type UserCreateWithoutForumCommentsInput = {
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  mentalHealthMetrics?: MentalHealthMetricCreateNestedManyWithoutUserInput
  forumPosts?: ForumPostCreateNestedManyWithoutUserInput
  preferences?: UserPreferenceCreateNestedOneWithoutUserInput
  gardenElements?: GardenElementCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutForumCommentsInput = {
  id?: number
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  mentalHealthMetrics?: MentalHealthMetricUncheckedCreateNestedManyWithoutUserInput
  forumPosts?: ForumPostUncheckedCreateNestedManyWithoutUserInput
  preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  gardenElements?: GardenElementUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutForumCommentsInput = {
  where: UserWhereUniqueInput
  create: XOR<UserCreateWithoutForumCommentsInput, UserUncheckedCreateWithoutForumCommentsInput>
}

export type ForumPostUpsertWithoutCommentsInput = {
  update: XOR<ForumPostUpdateWithoutCommentsInput, ForumPostUncheckedUpdateWithoutCommentsInput>
  create: XOR<ForumPostCreateWithoutCommentsInput, ForumPostUncheckedCreateWithoutCommentsInput>
  where?: ForumPostWhereInput
}

export type ForumPostUpdateToOneWithWhereWithoutCommentsInput = {
  where?: ForumPostWhereInput
  data: XOR<ForumPostUpdateWithoutCommentsInput, ForumPostUncheckedUpdateWithoutCommentsInput>
}

export type ForumPostUpdateWithoutCommentsInput = {
  title?: StringFieldUpdateOperationsInput | string
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  user?: UserUpdateOneWithoutForumPostsNestedInput
  category?: ForumCategoryUpdateOneWithoutPostsNestedInput
}

export type ForumPostUncheckedUpdateWithoutCommentsInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: NullableIntFieldUpdateOperationsInput | number | null
  categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  title?: StringFieldUpdateOperationsInput | string
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type UserUpsertWithoutForumCommentsInput = {
  update: XOR<UserUpdateWithoutForumCommentsInput, UserUncheckedUpdateWithoutForumCommentsInput>
  create: XOR<UserCreateWithoutForumCommentsInput, UserUncheckedCreateWithoutForumCommentsInput>
  where?: UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutForumCommentsInput = {
  where?: UserWhereInput
  data: XOR<UserUpdateWithoutForumCommentsInput, UserUncheckedUpdateWithoutForumCommentsInput>
}

export type UserUpdateWithoutForumCommentsInput = {
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  mentalHealthMetrics?: MentalHealthMetricUpdateManyWithoutUserNestedInput
  forumPosts?: ForumPostUpdateManyWithoutUserNestedInput
  preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
  gardenElements?: GardenElementUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutForumCommentsInput = {
  id?: IntFieldUpdateOperationsInput | number
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  mentalHealthMetrics?: MentalHealthMetricUncheckedUpdateManyWithoutUserNestedInput
  forumPosts?: ForumPostUncheckedUpdateManyWithoutUserNestedInput
  preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  gardenElements?: GardenElementUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateWithoutPreferencesInput = {
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  mentalHealthMetrics?: MentalHealthMetricCreateNestedManyWithoutUserInput
  forumPosts?: ForumPostCreateNestedManyWithoutUserInput
  forumComments?: ForumCommentCreateNestedManyWithoutUserInput
  gardenElements?: GardenElementCreateNestedManyWithoutUserInput
}

export type UserUncheckedCreateWithoutPreferencesInput = {
  id?: number
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  mentalHealthMetrics?: MentalHealthMetricUncheckedCreateNestedManyWithoutUserInput
  forumPosts?: ForumPostUncheckedCreateNestedManyWithoutUserInput
  forumComments?: ForumCommentUncheckedCreateNestedManyWithoutUserInput
  gardenElements?: GardenElementUncheckedCreateNestedManyWithoutUserInput
}

export type UserCreateOrConnectWithoutPreferencesInput = {
  where: UserWhereUniqueInput
  create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
}

export type UserUpsertWithoutPreferencesInput = {
  update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  where?: UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
  where?: UserWhereInput
  data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
}

export type UserUpdateWithoutPreferencesInput = {
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  mentalHealthMetrics?: MentalHealthMetricUpdateManyWithoutUserNestedInput
  forumPosts?: ForumPostUpdateManyWithoutUserNestedInput
  forumComments?: ForumCommentUpdateManyWithoutUserNestedInput
  gardenElements?: GardenElementUpdateManyWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutPreferencesInput = {
  id?: IntFieldUpdateOperationsInput | number
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  mentalHealthMetrics?: MentalHealthMetricUncheckedUpdateManyWithoutUserNestedInput
  forumPosts?: ForumPostUncheckedUpdateManyWithoutUserNestedInput
  forumComments?: ForumCommentUncheckedUpdateManyWithoutUserNestedInput
  gardenElements?: GardenElementUncheckedUpdateManyWithoutUserNestedInput
}

export type UserCreateWithoutGardenElementsInput = {
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  mentalHealthMetrics?: MentalHealthMetricCreateNestedManyWithoutUserInput
  forumPosts?: ForumPostCreateNestedManyWithoutUserInput
  forumComments?: ForumCommentCreateNestedManyWithoutUserInput
  preferences?: UserPreferenceCreateNestedOneWithoutUserInput
}

export type UserUncheckedCreateWithoutGardenElementsInput = {
  id?: number
  email: string
  name: string
  passwordHash: string
  isEmailVerified?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
  mentalHealthMetrics?: MentalHealthMetricUncheckedCreateNestedManyWithoutUserInput
  forumPosts?: ForumPostUncheckedCreateNestedManyWithoutUserInput
  forumComments?: ForumCommentUncheckedCreateNestedManyWithoutUserInput
  preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
}

export type UserCreateOrConnectWithoutGardenElementsInput = {
  where: UserWhereUniqueInput
  create: XOR<UserCreateWithoutGardenElementsInput, UserUncheckedCreateWithoutGardenElementsInput>
}

export type UserUpsertWithoutGardenElementsInput = {
  update: XOR<UserUpdateWithoutGardenElementsInput, UserUncheckedUpdateWithoutGardenElementsInput>
  create: XOR<UserCreateWithoutGardenElementsInput, UserUncheckedCreateWithoutGardenElementsInput>
  where?: UserWhereInput
}

export type UserUpdateToOneWithWhereWithoutGardenElementsInput = {
  where?: UserWhereInput
  data: XOR<UserUpdateWithoutGardenElementsInput, UserUncheckedUpdateWithoutGardenElementsInput>
}

export type UserUpdateWithoutGardenElementsInput = {
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  mentalHealthMetrics?: MentalHealthMetricUpdateManyWithoutUserNestedInput
  forumPosts?: ForumPostUpdateManyWithoutUserNestedInput
  forumComments?: ForumCommentUpdateManyWithoutUserNestedInput
  preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
}

export type UserUncheckedUpdateWithoutGardenElementsInput = {
  id?: IntFieldUpdateOperationsInput | number
  email?: StringFieldUpdateOperationsInput | string
  name?: StringFieldUpdateOperationsInput | string
  passwordHash?: StringFieldUpdateOperationsInput | string
  isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  mentalHealthMetrics?: MentalHealthMetricUncheckedUpdateManyWithoutUserNestedInput
  forumPosts?: ForumPostUncheckedUpdateManyWithoutUserNestedInput
  forumComments?: ForumCommentUncheckedUpdateManyWithoutUserNestedInput
  preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
}

export type MentalHealthMetricCreateManyUserInput = {
  id?: number
  metricDate: Date | string
  mood: number
  anxietyLevel?: number | null
  stressLevel?: number | null
  notes?: string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: Date | string
}

export type ForumPostCreateManyUserInput = {
  id?: number
  categoryId?: number | null
  title: string
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ForumCommentCreateManyUserInput = {
  id?: number
  postId: number
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
}

export type GardenElementCreateManyUserInput = {
  id?: number
  type: $Enums.GardenElementType
  name: string
  description?: string | null
  plantedDate?: Date | string
  lastWateredDate?: Date | string
  growthStage?: number
  healthStatus?: $Enums.HealthStatus
  positionX: number
  positionY: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type MentalHealthMetricUpdateWithoutUserInput = {
  metricDate?: DateTimeFieldUpdateOperationsInput | Date | string
  mood?: IntFieldUpdateOperationsInput | number
  anxietyLevel?: NullableIntFieldUpdateOperationsInput | number | null
  stressLevel?: NullableIntFieldUpdateOperationsInput | number | null
  notes?: NullableStringFieldUpdateOperationsInput | string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type MentalHealthMetricUncheckedUpdateWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput | number
  metricDate?: DateTimeFieldUpdateOperationsInput | Date | string
  mood?: IntFieldUpdateOperationsInput | number
  anxietyLevel?: NullableIntFieldUpdateOperationsInput | number | null
  stressLevel?: NullableIntFieldUpdateOperationsInput | number | null
  notes?: NullableStringFieldUpdateOperationsInput | string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type MentalHealthMetricUncheckedUpdateManyWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput | number
  metricDate?: DateTimeFieldUpdateOperationsInput | Date | string
  mood?: IntFieldUpdateOperationsInput | number
  anxietyLevel?: NullableIntFieldUpdateOperationsInput | number | null
  stressLevel?: NullableIntFieldUpdateOperationsInput | number | null
  notes?: NullableStringFieldUpdateOperationsInput | string | null
  activities?: NullableJsonNullValueInput | InputJsonValue
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ForumPostUpdateWithoutUserInput = {
  title?: StringFieldUpdateOperationsInput | string
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  category?: ForumCategoryUpdateOneWithoutPostsNestedInput
  comments?: ForumCommentUpdateManyWithoutPostNestedInput
}

export type ForumPostUncheckedUpdateWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput | number
  categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  title?: StringFieldUpdateOperationsInput | string
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  comments?: ForumCommentUncheckedUpdateManyWithoutPostNestedInput
}

export type ForumPostUncheckedUpdateManyWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput | number
  categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  title?: StringFieldUpdateOperationsInput | string
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ForumCommentUpdateWithoutUserInput = {
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  post?: ForumPostUpdateOneRequiredWithoutCommentsNestedInput
}

export type ForumCommentUncheckedUpdateWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput | number
  postId?: IntFieldUpdateOperationsInput | number
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ForumCommentUncheckedUpdateManyWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput | number
  postId?: IntFieldUpdateOperationsInput | number
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type GardenElementUpdateWithoutUserInput = {
  type?: EnumGardenElementTypeFieldUpdateOperationsInput | $Enums.GardenElementType
  name?: StringFieldUpdateOperationsInput | string
  description?: NullableStringFieldUpdateOperationsInput | string | null
  plantedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  lastWateredDate?: DateTimeFieldUpdateOperationsInput | Date | string
  growthStage?: IntFieldUpdateOperationsInput | number
  healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
  positionX?: IntFieldUpdateOperationsInput | number
  positionY?: IntFieldUpdateOperationsInput | number
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type GardenElementUncheckedUpdateWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput | number
  type?: EnumGardenElementTypeFieldUpdateOperationsInput | $Enums.GardenElementType
  name?: StringFieldUpdateOperationsInput | string
  description?: NullableStringFieldUpdateOperationsInput | string | null
  plantedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  lastWateredDate?: DateTimeFieldUpdateOperationsInput | Date | string
  growthStage?: IntFieldUpdateOperationsInput | number
  healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
  positionX?: IntFieldUpdateOperationsInput | number
  positionY?: IntFieldUpdateOperationsInput | number
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type GardenElementUncheckedUpdateManyWithoutUserInput = {
  id?: IntFieldUpdateOperationsInput | number
  type?: EnumGardenElementTypeFieldUpdateOperationsInput | $Enums.GardenElementType
  name?: StringFieldUpdateOperationsInput | string
  description?: NullableStringFieldUpdateOperationsInput | string | null
  plantedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  lastWateredDate?: DateTimeFieldUpdateOperationsInput | Date | string
  growthStage?: IntFieldUpdateOperationsInput | number
  healthStatus?: EnumHealthStatusFieldUpdateOperationsInput | $Enums.HealthStatus
  positionX?: IntFieldUpdateOperationsInput | number
  positionY?: IntFieldUpdateOperationsInput | number
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ForumPostCreateManyCategoryInput = {
  id?: number
  userId?: number | null
  title: string
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type ForumPostUpdateWithoutCategoryInput = {
  title?: StringFieldUpdateOperationsInput | string
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  user?: UserUpdateOneWithoutForumPostsNestedInput
  comments?: ForumCommentUpdateManyWithoutPostNestedInput
}

export type ForumPostUncheckedUpdateWithoutCategoryInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: NullableIntFieldUpdateOperationsInput | number | null
  title?: StringFieldUpdateOperationsInput | string
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  comments?: ForumCommentUncheckedUpdateManyWithoutPostNestedInput
}

export type ForumPostUncheckedUpdateManyWithoutCategoryInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: NullableIntFieldUpdateOperationsInput | number | null
  title?: StringFieldUpdateOperationsInput | string
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ForumCommentCreateManyPostInput = {
  id?: number
  userId?: number | null
  content: string
  isAnonymous?: boolean
  createdAt?: Date | string
}

export type ForumCommentUpdateWithoutPostInput = {
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  user?: UserUpdateOneWithoutForumCommentsNestedInput
}

export type ForumCommentUncheckedUpdateWithoutPostInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: NullableIntFieldUpdateOperationsInput | number | null
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
}

export type ForumCommentUncheckedUpdateManyWithoutPostInput = {
  id?: IntFieldUpdateOperationsInput | number
  userId?: NullableIntFieldUpdateOperationsInput | number | null
  content?: StringFieldUpdateOperationsInput | string
  isAnonymous?: BoolFieldUpdateOperationsInput | boolean
  createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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