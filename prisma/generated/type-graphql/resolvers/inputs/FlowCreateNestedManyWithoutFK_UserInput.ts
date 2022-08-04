import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyFK_UserInputEnvelope } from "../inputs/FlowCreateManyFK_UserInputEnvelope";
import { FlowCreateOrConnectWithoutFK_UserInput } from "../inputs/FlowCreateOrConnectWithoutFK_UserInput";
import { FlowCreateWithoutFK_UserInput } from "../inputs/FlowCreateWithoutFK_UserInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [FlowCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: FlowCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: FlowCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowWhereUniqueInput[] | undefined;
}
