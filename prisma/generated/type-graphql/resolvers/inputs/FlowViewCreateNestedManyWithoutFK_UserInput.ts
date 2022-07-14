import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewCreateManyFK_UserInputEnvelope } from "../inputs/FlowViewCreateManyFK_UserInputEnvelope";
import { FlowViewCreateOrConnectWithoutFK_UserInput } from "../inputs/FlowViewCreateOrConnectWithoutFK_UserInput";
import { FlowViewCreateWithoutFK_UserInput } from "../inputs/FlowViewCreateWithoutFK_UserInput";
import { FlowViewWhereUniqueInput } from "../inputs/FlowViewWhereUniqueInput";

@TypeGraphQL.InputType("FlowViewCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowViewCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [FlowViewCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: FlowViewCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: FlowViewCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowViewCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: FlowViewCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowViewWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowViewWhereUniqueInput[] | undefined;
}
