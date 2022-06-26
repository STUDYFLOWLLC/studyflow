import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardCreateManyFK_FlashCardStackInput } from "../inputs/FlashCardCreateManyFK_FlashCardStackInput";

@TypeGraphQL.InputType("FlashCardCreateManyFK_FlashCardStackInputEnvelope", {
  isAbstract: true
})
export class FlashCardCreateManyFK_FlashCardStackInputEnvelope {
  @TypeGraphQL.Field(_type => [FlashCardCreateManyFK_FlashCardStackInput], {
    nullable: false
  })
  data!: FlashCardCreateManyFK_FlashCardStackInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
