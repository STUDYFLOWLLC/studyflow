import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionCreateOrConnectWithoutFK_FlowInput } from "../inputs/RepetitionCreateOrConnectWithoutFK_FlowInput";
import { RepetitionCreateWithoutFK_FlowInput } from "../inputs/RepetitionCreateWithoutFK_FlowInput";
import { RepetitionWhereUniqueInput } from "../inputs/RepetitionWhereUniqueInput";

@TypeGraphQL.InputType("RepetitionCreateNestedOneWithoutFK_FlowInput", {
  isAbstract: true
})
export class RepetitionCreateNestedOneWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => RepetitionCreateWithoutFK_FlowInput, {
    nullable: true
  })
  create?: RepetitionCreateWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionCreateOrConnectWithoutFK_FlowInput, {
    nullable: true
  })
  connectOrCreate?: RepetitionCreateOrConnectWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionWhereUniqueInput, {
    nullable: true
  })
  connect?: RepetitionWhereUniqueInput | undefined;
}
