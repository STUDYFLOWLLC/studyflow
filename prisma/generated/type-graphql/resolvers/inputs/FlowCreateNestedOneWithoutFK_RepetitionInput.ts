import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_RepetitionInput } from "../inputs/FlowCreateOrConnectWithoutFK_RepetitionInput";
import { FlowCreateWithoutFK_RepetitionInput } from "../inputs/FlowCreateWithoutFK_RepetitionInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedOneWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class FlowCreateNestedOneWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_RepetitionInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_RepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_RepetitionInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_RepetitionInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;
}
