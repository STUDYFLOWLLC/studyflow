import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutCreatedByUserInput } from "../inputs/FlowCreateWithoutCreatedByUserInput";
import { FlowUpdateWithoutCreatedByUserInput } from "../inputs/FlowUpdateWithoutCreatedByUserInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpsertWithWhereUniqueWithoutCreatedByUserInput", {
  isAbstract: true
})
export class FlowUpsertWithWhereUniqueWithoutCreatedByUserInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutCreatedByUserInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutCreatedByUserInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutCreatedByUserInput, {
    nullable: false
  })
  create!: FlowCreateWithoutCreatedByUserInput;
}
