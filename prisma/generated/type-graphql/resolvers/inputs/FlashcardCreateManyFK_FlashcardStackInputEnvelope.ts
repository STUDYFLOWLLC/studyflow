import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardCreateManyFK_FlashcardStackInput } from "../inputs/FlashcardCreateManyFK_FlashcardStackInput";

@TypeGraphQL.InputType("FlashcardCreateManyFK_FlashcardStackInputEnvelope", {
  isAbstract: true
})
export class FlashcardCreateManyFK_FlashcardStackInputEnvelope {
  @TypeGraphQL.Field(_type => [FlashcardCreateManyFK_FlashcardStackInput], {
    nullable: false
  })
  data!: FlashcardCreateManyFK_FlashcardStackInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
