import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateManyFK_FlowInput } from "../inputs/FlashCardStackCreateManyFK_FlowInput";

@TypeGraphQL.InputType("FlashCardStackCreateManyFK_FlowInputEnvelope", {
  isAbstract: true
})
export class FlashCardStackCreateManyFK_FlowInputEnvelope {
  @TypeGraphQL.Field(_type => [FlashCardStackCreateManyFK_FlowInput], {
    nullable: false
  })
  data!: FlashCardStackCreateManyFK_FlowInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
