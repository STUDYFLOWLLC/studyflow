import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserAvgAggregate } from "../outputs/CourseOnUserAvgAggregate";
import { CourseOnUserCountAggregate } from "../outputs/CourseOnUserCountAggregate";
import { CourseOnUserMaxAggregate } from "../outputs/CourseOnUserMaxAggregate";
import { CourseOnUserMinAggregate } from "../outputs/CourseOnUserMinAggregate";
import { CourseOnUserSumAggregate } from "../outputs/CourseOnUserSumAggregate";

@TypeGraphQL.ObjectType("CourseOnUserGroupBy", {
  isAbstract: true
})
export class CourseOnUserGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  CourseOnUserID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOLDER!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseID!: number | null;

  @TypeGraphQL.Field(_type => CourseOnUserCountAggregate, {
    nullable: true
  })
  _count!: CourseOnUserCountAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnUserAvgAggregate, {
    nullable: true
  })
  _avg!: CourseOnUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnUserSumAggregate, {
    nullable: true
  })
  _sum!: CourseOnUserSumAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnUserMinAggregate, {
    nullable: true
  })
  _min!: CourseOnUserMinAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnUserMaxAggregate, {
    nullable: true
  })
  _max!: CourseOnUserMaxAggregate | null;
}
