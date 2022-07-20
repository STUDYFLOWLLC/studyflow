import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateManyFK_UserInputEnvelope } from "../inputs/AutomationCreateManyFK_UserInputEnvelope";
import { AutomationCreateOrConnectWithoutFK_UserInput } from "../inputs/AutomationCreateOrConnectWithoutFK_UserInput";
import { AutomationCreateWithoutFK_UserInput } from "../inputs/AutomationCreateWithoutFK_UserInput";
import { AutomationWhereUniqueInput } from "../inputs/AutomationWhereUniqueInput";

@TypeGraphQL.InputType("AutomationCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class AutomationCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [AutomationCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: AutomationCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AutomationCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: AutomationCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => AutomationCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: AutomationCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AutomationWhereUniqueInput], {
    nullable: true
  })
  connect?: AutomationWhereUniqueInput[] | undefined;
}
