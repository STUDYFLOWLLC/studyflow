import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateManyFK_FlowInput } from "../inputs/RepetitionCreateManyFK_FlowInput";

@TypeGraphQL.InputType("RepetitionCreateManyFK_FlowInputEnvelope", {
  isAbstract: true
})
export class RepetitionCreateManyFK_FlowInputEnvelope {
  @TypeGraphQL.Field(_type => [RepetitionCreateManyFK_FlowInput], {
    nullable: false
  })
  data!: RepetitionCreateManyFK_FlowInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
