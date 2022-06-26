import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateOrConnectWithoutFK_FlowsInput } from "../inputs/CourseOnTermCreateOrConnectWithoutFK_FlowsInput";
import { CourseOnTermCreateWithoutFK_FlowsInput } from "../inputs/CourseOnTermCreateWithoutFK_FlowsInput";
import { CourseOnTermUpdateWithoutFK_FlowsInput } from "../inputs/CourseOnTermUpdateWithoutFK_FlowsInput";
import { CourseOnTermUpsertWithoutFK_FlowsInput } from "../inputs/CourseOnTermUpsertWithoutFK_FlowsInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermUpdateOneWithoutFK_FlowsInput", {
  isAbstract: true
})
export class CourseOnTermUpdateOneWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutFK_FlowsInput, {
    nullable: true
  })
  create?: CourseOnTermCreateWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateOrConnectWithoutFK_FlowsInput, {
    nullable: true
  })
  connectOrCreate?: CourseOnTermCreateOrConnectWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpsertWithoutFK_FlowsInput, {
    nullable: true
  })
  upsert?: CourseOnTermUpsertWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseOnTermWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateWithoutFK_FlowsInput, {
    nullable: true
  })
  update?: CourseOnTermUpdateWithoutFK_FlowsInput | undefined;
}
