import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyCourseOnTermInputEnvelope } from "../inputs/FlowCreateManyCourseOnTermInputEnvelope";
import { FlowCreateOrConnectWithoutCourseOnTermInput } from "../inputs/FlowCreateOrConnectWithoutCourseOnTermInput";
import { FlowCreateWithoutCourseOnTermInput } from "../inputs/FlowCreateWithoutCourseOnTermInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedManyWithoutCourseOnTermInput", {
  isAbstract: true
})
export class FlowCreateNestedManyWithoutCourseOnTermInput {
  @TypeGraphQL.Field(_type => [FlowCreateWithoutCourseOnTermInput], {
    nullable: true
  })
  create?: FlowCreateWithoutCourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowCreateOrConnectWithoutCourseOnTermInput], {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutCourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowCreateManyCourseOnTermInputEnvelope, {
    nullable: true
  })
  createMany?: FlowCreateManyCourseOnTermInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowWhereUniqueInput[] | undefined;
}
