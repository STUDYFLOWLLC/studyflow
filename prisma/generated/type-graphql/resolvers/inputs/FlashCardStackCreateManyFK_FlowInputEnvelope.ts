import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateManyFK_FlowInput } from "../inputs/FlashcardStackCreateManyFK_FlowInput";

@TypeGraphQL.InputType("FlashcardStackCreateManyFK_FlowInputEnvelope", {
  isAbstract: true
})
export class FlashcardStackCreateManyFK_FlowInputEnvelope {
  @TypeGraphQL.Field(_type => [FlashcardStackCreateManyFK_FlowInput], {
    nullable: false
  })
  data!: FlashcardStackCreateManyFK_FlowInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
