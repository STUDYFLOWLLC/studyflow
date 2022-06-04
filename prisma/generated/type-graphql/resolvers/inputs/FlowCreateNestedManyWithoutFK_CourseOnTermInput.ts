import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyFK_CourseOnTermInputEnvelope } from "../inputs/FlowCreateManyFK_CourseOnTermInputEnvelope";
import { FlowCreateOrConnectWithoutFK_CourseOnTermInput } from "../inputs/FlowCreateOrConnectWithoutFK_CourseOnTermInput";
import { FlowCreateWithoutFK_CourseOnTermInput } from "../inputs/FlowCreateWithoutFK_CourseOnTermInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedManyWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class FlowCreateNestedManyWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => [FlowCreateWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  create?: FlowCreateWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowCreateOrConnectWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowCreateManyFK_CourseOnTermInputEnvelope, {
    nullable: true
  })
  createMany?: FlowCreateManyFK_CourseOnTermInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowWhereUniqueInput[] | undefined;
}
