import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagCreateManyFK_UserInputEnvelope } from "../inputs/FlowTagCreateManyFK_UserInputEnvelope";
import { FlowTagCreateOrConnectWithoutFK_UserInput } from "../inputs/FlowTagCreateOrConnectWithoutFK_UserInput";
import { FlowTagCreateWithoutFK_UserInput } from "../inputs/FlowTagCreateWithoutFK_UserInput";
import { FlowTagWhereUniqueInput } from "../inputs/FlowTagWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowTagCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [FlowTagCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: FlowTagCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: FlowTagCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowTagCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: FlowTagCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowTagWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowTagWhereUniqueInput[] | undefined;
}
