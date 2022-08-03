import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionUpdateWithoutFK_FlowInput } from "../inputs/RepetitionUpdateWithoutFK_FlowInput";
import { RepetitionWhereUniqueInput } from "../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.InputType("RepetitionUpdateWithWhereUniqueWithoutFK_FlowInput", {
  isAbstract: true
})
export class RepetitionUpdateWithWhereUniqueWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => RepetitionWhereUniqueInput, {
    nullable: false
  })
  where!: RepetitionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RepetitionUpdateWithoutFK_FlowInput, {
    nullable: false
  })
  data!: RepetitionUpdateWithoutFK_FlowInput;
}
