import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateOrConnectWithoutFK_CourseOnTermInput } from "../inputs/TermCreateOrConnectWithoutFK_CourseOnTermInput";
import { TermCreateWithoutFK_CourseOnTermInput } from "../inputs/TermCreateWithoutFK_CourseOnTermInput";
import { TermUpdateWithoutFK_CourseOnTermInput } from "../inputs/TermUpdateWithoutFK_CourseOnTermInput";
import { TermUpsertWithoutFK_CourseOnTermInput } from "../inputs/TermUpsertWithoutFK_CourseOnTermInput";
import { TermWhereUniqueInput } from "../inputs/TermWhereUniqueInput";

@TypeGraphQL.InputType("TermUpdateOneRequiredWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class TermUpdateOneRequiredWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => TermCreateWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  create?: TermCreateWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => TermCreateOrConnectWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  connectOrCreate?: TermCreateOrConnectWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => TermUpsertWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  upsert?: TermUpsertWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => TermWhereUniqueInput, {
    nullable: true
  })
  connect?: TermWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TermUpdateWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  update?: TermUpdateWithoutFK_CourseOnTermInput | undefined;
}
